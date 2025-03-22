"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          className={cn(
            "space-y-6 transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
          )}
        >
          <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Passionate Developer at{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100">
              Sanzei Soft
            </span>
          </h2>
          <p className="text-foreground/80">
           👋 Hey there! I'm Sandi, a full-stack developer who loves crafting beautiful and functional websites. From frontend magic ✨ to backend logic 🔥, I make sure everything runs smoothly and efficiently.
          </p>
          <p className="text-foreground/80">
            ⚡ At Sanzei Soft, I’ve worked on various projects, bringing high-performance applications to life. Always exploring new tech and pushing boundaries to deliver the best user experience possible 🚀.


          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h3 className="text-xl font-bold">1+</h3>
              <p className="text-foreground/70">Years Experience</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">3</h3>
              <p className="text-foreground/70">Projects Launched</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">20+</h3>
              <p className="text-foreground/70">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">10+</h3>
              <p className="text-foreground/70">Technologies</p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
          )}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-300/30 to-slate-500/30 dark:from-slate-700/30 dark:to-slate-900/30 rounded-2xl rotate-6 transform-gpu"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-slate-300/20 to-slate-500/20 dark:from-slate-700/20 dark:to-slate-900/20 rounded-2xl -rotate-6 transform-gpu"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/20 dark:border-slate-800/20 bg-background">
              <img src="/about-image.png" alt="About me" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

