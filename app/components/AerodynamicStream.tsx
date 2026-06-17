"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"

export default function AerodynamicStream() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    // Dimensions
    let width = container.clientWidth
    let height = container.clientHeight

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.set(0, 0, 8)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Add high-end lighting to illuminate 3D facets
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8)
    dirLight.position.set(5, 5, 4)
    scene.add(dirLight)

    // Colors corresponding to BMW M Stripes
    const colorsM = [
      new THREE.Color("#0066b1"), // Light Blue
      new THREE.Color("#1c69d4"), // Dark Blue
      new THREE.Color("#e22718"), // Red
    ]

    // Create particles along streamlines
    // We will define 40 streamlines. Each streamline will guide multiple 3D needles.
    const numLines = 40
    const particlesPerLine = 35
    const particleCount = numLines * particlesPerLine

    // Low-poly 3D needle geometry (4-sided cone is extremely lightweight, only 6 vertices)
    const coneGeometry = new THREE.ConeGeometry(0.04, 0.35, 4)
    // Rotate geometry so the cone tip points in the negative X direction (direction of travel)
    coneGeometry.rotateZ(Math.PI / 2)

    // Shiny material to emphasize the 3D faces and catch light highlights
    const material = new THREE.MeshPhongMaterial({
      shininess: 90,
      specular: new THREE.Color("#ffffff"),
      flatShading: true,
    })

    const instancedMesh = new THREE.InstancedMesh(coneGeometry, material, particleCount)
    scene.add(instancedMesh)
    
    // Store metadata for each particle
    const particleData: Array<{
      lineIndex: number
      progress: number
      speed: number
      size: number
      originalY: number
      originalZ: number
    }> = []

    // Define coordinates of our streamlines
    const lineDefinitions = Array.from({ length: numLines }).map((_, i) => {
      // Grid arrangement
      const row = Math.floor(i / 8) - 2 // -2, -1, 0, 1, 2
      const col = (i % 8) - 4 // -4, -3, -2, -1, 0, 1, 2, 3

      // Base Y and Z positions
      const yBase = row * 1.3 + (Math.random() - 0.5) * 0.3
      const zBase = col * 1.1 + (Math.random() - 0.5) * 0.3

      // M-Stripe color allocation
      let color = colorsM[0] // Default Light Blue
      if (i >= 13 && i < 26) {
        color = colorsM[1] // Dark Blue
      } else if (i >= 26) {
        color = colorsM[2] // Red
      }

      // Speed profile: faster in the middle row (0), slower at top/bottom rows (row = 2, -2)
      const speed = 0.0016 - Math.abs(row) * 0.0003

      return {
        yBase,
        zBase,
        color,
        speed,
      }
    })

    // Populate particles
    let idx = 0
    for (let l = 0; l < numLines; l++) {
      const line = lineDefinitions[l]
      for (let p = 0; p < particlesPerLine; p++) {
        // Distribute initial progress evenly along the X axis
        const progress = p / particlesPerLine + (Math.random() - 0.5) * 0.005
        const size = 0.7 + Math.random() * 0.5

        particleData.push({
          lineIndex: l,
          progress,
          speed: line.speed, // Inherit speed from the line definition
          size,
          originalY: line.yBase,
          originalZ: line.zBase,
        })

        // Set initial instance color
        instancedMesh.setColorAt(idx, line.color)
        idx++
      }
    }

    // Interaction variables
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    let scrollSpeedBoost = 0
    let scrollSpeedTarget = 0
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = ((event.clientX - rect.left) / width) * 2 - 1
      mouse.targetY = -((event.clientY - rect.top) / height) * 2 + 1
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = Math.abs(currentScrollY - lastScrollY)
      // High-performance acceleration: translate scroll impulse to a target speed increase
      scrollSpeedTarget = Math.min(diff * 0.0008, 0.015)
      lastScrollY = currentScrollY
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Window resize handler
    const handleResize = () => {
      if (!containerRef.current) return
      width = containerRef.current.clientWidth
      height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener("resize", handleResize)

    const resizeTimeout = setTimeout(handleResize, 100)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()
    
    // Matrix helper variables to avoid garbage collection overhead in the loop
    const matrix = new THREE.Matrix4()
    const posVec = new THREE.Vector3()
    const nextPosVec = new THREE.Vector3()
    const scaleVec = new THREE.Vector3()
    const rotationQuat = new THREE.Quaternion()
    const velocityDir = new THREE.Vector3()
    const defaultDirection = new THREE.Vector3(-1, 0, 0)
    const tempColor = new THREE.Color()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const time = clock.getElapsedTime()
      
      mouse.x += (mouse.targetX - mouse.x) * 0.1
      mouse.y += (mouse.targetY - mouse.y) * 0.1

      // Smoothly lerp and decay scroll acceleration boost
      scrollSpeedBoost += (scrollSpeedTarget - scrollSpeedBoost) * 0.1
      scrollSpeedTarget *= 0.94 // decelerate back to cruising speed

      const mouse3D = new THREE.Vector3(mouse.x * 6.0, mouse.y * 4.0, 0)
      const interactionRadius = 2.2

      for (let i = 0; i < particleCount; i++) {
        const data = particleData[i]
        const line = lineDefinitions[data.lineIndex]

        // 1. Calculate progress
        const baseSpeed = data.speed + scrollSpeedBoost
        data.progress += baseSpeed

        if (data.progress > 1.0) {
          data.progress = 0
        }

        // 2. Compute current 3D position
        const x = 10 - data.progress * 20
        let y = data.originalY
        let z = data.originalZ

        // Aerodynamic Contour bump
        const contourBump = Math.exp(-(x * x) / (3.0 * 3.0)) * 1.4
        y += contourBump

        // Wave oscillation
        y += Math.sin(x * 1.5 + time * 2.0 + data.originalY) * 0.15
        z += Math.cos(x * 1.0 + time * 1.5 + data.originalZ) * 0.15

        // Mouse deflection
        posVec.set(x, y, z)
        let distToMouse = posVec.distanceTo(mouse3D)
        if (distToMouse < interactionRadius) {
          const force = (1.0 - distToMouse / interactionRadius) * 1.2
          const direction = posVec.clone().sub(mouse3D)
          direction.x = 0
          direction.normalize()
          y += direction.y * force
          z += direction.z * force
          posVec.set(x, y, z) // Recalculate position with deflection
        }

        // 3. Compute target vector direction (predicting position slightly ahead)
        const nextProgress = Math.min(data.progress + 0.005, 1.0)
        const nextX = 10 - nextProgress * 20
        let nextY = data.originalY
        let nextZ = data.originalZ

        const nextContourBump = Math.exp(-(nextX * nextX) / (3.0 * 3.0)) * 1.4
        nextY += nextContourBump
        nextY += Math.sin(nextX * 1.5 + time * 2.0 + data.originalY) * 0.15
        nextZ += Math.cos(nextX * 1.0 + time * 1.5 + data.originalZ) * 0.15

        nextPosVec.set(nextX, nextY, nextZ)
        // Deflect next point by mouse to keep orientation aligned with the deflection path
        distToMouse = nextPosVec.distanceTo(mouse3D)
        if (distToMouse < interactionRadius) {
          const force = (1.0 - distToMouse / interactionRadius) * 1.2
          const direction = nextPosVec.clone().sub(mouse3D)
          direction.x = 0
          direction.normalize()
          nextY += direction.y * force
          nextZ += direction.z * force
          nextPosVec.set(nextX, nextY, nextZ)
        }

        // Calculate flow direction vector
        velocityDir.subVectors(nextPosVec, posVec).normalize()

        // 4. Calculate fading (0 at boundaries, 1 in center)
        let fade = 1.0
        if (data.progress < 0.25) {
          fade = Math.sin((data.progress / 0.25) * Math.PI * 0.5)
        } else if (data.progress > 0.75) {
          fade = Math.sin(((1.0 - data.progress) / 0.25) * Math.PI * 0.5)
        }

        // 5. Compose matrix (position, rotation aligned to path, scale scaling to 0 on exit)
        const currentScale = data.size * fade
        scaleVec.set(currentScale, currentScale, currentScale)
        rotationQuat.setFromUnitVectors(defaultDirection, velocityDir)
        matrix.compose(posVec, rotationQuat, scaleVec)
        
        instancedMesh.setMatrixAt(i, matrix)

        // 6. Fade color dynamically (simulate transparency via black fading in additive blending/ambient shadow)
        tempColor.setRGB(line.color.r * fade, line.color.g * fade, line.color.b * fade)
        instancedMesh.setColorAt(i, tempColor)
      }

      instancedMesh.instanceMatrix.needsUpdate = true
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true
      }

      // Slowly rotate scene slightly to add 3D depth
      instancedMesh.rotation.y = Math.sin(time * 0.15) * 0.1
      instancedMesh.rotation.x = Math.cos(time * 0.1) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      clearTimeout(resizeTimeout)
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      
      // Dispose WebGL resources
      coneGeometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none" />
    </div>
  )
}
