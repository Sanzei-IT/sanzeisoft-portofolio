"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(href.substring(1))
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "flex flex-col items-center py-3 px-2 transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-slate-900 dark:text-slate-100"
                  : "text-slate-500 dark:text-slate-400",
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 mb-1 transition-transform",
                  activeSection === item.href.substring(1) && "scale-110",
                )}
              />
              <span className="text-xs">{item.name}</span>
              {activeSection === item.href.substring(1) && (
                <span className="absolute top-3 w-1.5 h-1.5 rounded-full bg-slate-700 dark:bg-slate-300"></span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

