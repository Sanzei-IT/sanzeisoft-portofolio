"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine which section is currently in view
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })

      // Update active section
      setActiveSection(href.substring(1))
    }
  }

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      const newDarkMode = !isDarkMode
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("darkMode", newDarkMode.toString())
      setIsDarkMode(newDarkMode)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400">
            Sanzei Soft
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "text-foreground/80 hover:text-slate-700 dark:hover:text-slate-300 transition-colors relative group",
                activeSection === item.href.substring(1) && "text-slate-900 dark:text-slate-100 font-medium",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 group-hover:w-full",
                  activeSection === item.href.substring(1) ? "w-full" : "w-0",
                )}
              ></span>
            </button>
          ))}
          <Button variant="outline" size="icon" className="rounded-full" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md p-4 animate-in slide-in-from-top">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-foreground/80 hover:text-slate-700 dark:hover:text-slate-300 transition-colors py-3 border-b border-border flex justify-between items-center",
                  activeSection === item.href.substring(1) && "text-slate-900 dark:text-slate-100 font-medium",
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="w-2 h-2 rounded-full bg-slate-700 dark:bg-slate-300"></span>
                )}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

