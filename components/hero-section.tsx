"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState("Full-Stack Developer")
  const phrases = [
    "Full-Stack Developer",
    "Web Designer",
    "UI/UX Enthusiast",
    "Frontend Developer",
    "Backend Developer",
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Remove this useEffect since we're not using setText anymore
  // useEffect(() => {
  //   setText(phrases[index]);
  // }, [index]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div
          className={cn(
            "space-y-6 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className="inline-block min-w-40 h-5 relative overflow-hidden">
              {phrases.map((phrase, i) => (
                <span
                  key={i}
                  className={`absolute transition-all duration-500 ${
                    index === i ? "top-0 opacity-100" : "top-8 opacity-0"
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100">
              Sanzei Soft
            </span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-md">
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="group bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-700"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Me
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "relative transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
          )}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300/40 to-slate-500/40 dark:from-slate-700/40 dark:to-slate-900/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-full overflow-hidden border-4 border-slate-200/40 dark:border-slate-800/40 bg-background">
                <img src="https://img12.pixhost.to/images/1107/578803906_imgtmp.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

