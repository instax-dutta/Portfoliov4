"use client"

import { memo, useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const menuItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
]

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-200 ${isScrolled ? "bg-bmw-canvas border-b border-bmw-hairline" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-bmw-ink text-sm font-bold tracking-machined uppercase no-underline select-none">
          SDAD
          <span className="block w-full h-[2px] bg-gradient-to-r from-bmw-m-blue-light via-bmw-m-blue-dark to-bmw-m-red mt-0.5" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-normal tracking-[0.5px] no-underline transition-colors duration-200 ${
                  isActive ? "text-bmw-ink" : "text-bmw-muted hover:text-bmw-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-bmw-ink"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileOpen ? (
        <div className="md:hidden bg-bmw-canvas border-b border-bmw-hairline">
          <div className="px-6 py-4 flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-sm tracking-[0.5px] no-underline border-b border-bmw-hairline last:border-0 ${
                    isActive ? "text-bmw-ink" : "text-bmw-muted"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default memo(Navigation)
