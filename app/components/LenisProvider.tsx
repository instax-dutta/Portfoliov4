"use client"

import type { ReactNode } from "react"
import { useEffect, useRef } from "react"
import Lenis from "lenis"

type LenisProviderProps = {
  children: ReactNode
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (prefersReducedMotion.matches) return

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis

    let animationFrame: number

    const onFrame = (time: number) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(onFrame)
    }

    animationFrame = requestAnimationFrame(onFrame)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrame)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}

export default LenisProvider
