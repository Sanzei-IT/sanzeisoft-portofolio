"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight, Github } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "Sanzei Soft Website",
    description:
      "Official website for Sanzei Soft with modern design, responsive layout, and interactive elements. Built with the latest web technologies to showcase our services and expertise.",
    image: "/project-sanzei.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Netlify"],
    demoUrl: "https://sanzeisoft.netlify.app",
    githubUrl: "#",
  },
  {
    title: "OSIS Katuba Website",
    description:
      "Official website for the Student Council (OSIS) of SMKN 1 Banyuanyar. Features event information, organizational structure, and student resources.",
    image: "/project-oskatuba.png",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    demoUrl: "https://oskatuba.netlify.app",
    githubUrl: "#",
  },
  {
    title: "XI TKJ Class Website",
    description:
      "Collaborative platform for the XI TKJ ACP class, featuring class schedules, learning materials, and student projects. Designed to enhance communication and resource sharing.",
    image: "/project-xitkj.png",
    tags: ["Next.js", "React", "Vercel", "Tailwind CSS"],
    demoUrl: "https://xitkj-acp.vercel.app",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="w-full">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/80">
            Here are some of my recent projects. Each one was built with a focus on solving real problems and delivering
            exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-200": index % 3 === 1 },
                { "transition-delay-400": index % 3 === 2 },
              )}
            >
              <Card className="overflow-hidden h-full group hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg border-slate-200 dark:border-slate-800 flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-1 bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-12 text-center transition-all duration-1000 delay-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <Button size="lg" className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

