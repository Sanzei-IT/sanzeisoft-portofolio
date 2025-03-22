"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type SkillCategory = {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "🚀 Programming Languages",
    skills: [
      '<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5">',
      '<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3">',
      '<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript">',
      '<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript">',
      '<img src="https://img.shields.io/badge/C-00599C?logo=c&logoColor=white&style=for-the-badge" alt="C">',
      '<img src="https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white&style=for-the-badge" alt="C++">',
      '<img src="https://img.shields.io/badge/C%23-239120?logo=csharp&logoColor=white&style=for-the-badge" alt="C#">',
      '<img src="https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white&style=for-the-badge" alt="PHP">',
      '<img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge" alt="Python">',
    ],
  },
  {
    title: "⚙️ Tools & Technologies",
    skills: [
      '<img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" alt="Node.js">',
      '<img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge" alt="Git">',
      '<img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub">',
      '<img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge" alt="Firebase">',
      '<img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" alt="MySQL">',
      '<img src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=for-the-badge" alt="Figma">',
      '<img src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=black&style=for-the-badge" alt="Netlify">',
      '<img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" alt="Vercel">',
    ],
  },
  {
    title: "💻 Operating Systems",
    skills: [
      '<img src="https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=white&style=for-the-badge" alt="Debian">',
      '<img src="https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=white&style=for-the-badge" alt="Ubuntu">',
      '<img src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black&style=for-the-badge" alt="Linux">',
      '<img src="https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white&style=for-the-badge" alt="Windows">',
      '<img src="https://img.shields.io/badge/Red%20Hat-EE0000?logo=redhat&logoColor=white&style=for-the-badge" alt="Red Hat">',
    ],
  },
  {
    title: "📱 Platforms",
    skills: [
      '<img src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=black&style=for-the-badge" alt="Android">',
      '<img src="https://img.shields.io/badge/Apple-000000?logo=apple&logoColor=white&style=for-the-badge" alt="Apple">',
    ],
  },
  {
    title: "🛠 Development Tools",
    skills: [
      '<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge" alt="VS Code">',
      '<img src="https://img.shields.io/badge/Visual%20Studio%20Marketplace-5C2D91?logo=visualstudio&logoColor=white&style=for-the-badge" alt="Visual Studio Marketplace">',
    ],
  },
]

export default function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
          <p className="text-foreground/80">
            I'm proficient in a wide range of technologies, allowing me to build complete, scalable applications from
            front-end to back-end.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-200": categoryIndex % 5 === 1 },
                { "transition-delay-400": categoryIndex % 5 === 2 },
                { "transition-delay-600": categoryIndex % 5 === 3 },
                { "transition-delay-800": categoryIndex % 5 === 4 },
              )}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="transition-all duration-300 hover:-translate-y-1"
                    dangerouslySetInnerHTML={{ __html: skill }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-16 text-center transition-all duration-1000 delay-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h3 className="text-2xl font-bold mb-6">
            My Development Approach at{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100">
              Sanzei Soft
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold mb-2">Responsive Design</h4>
              <p className="text-foreground/80">
                Creating interfaces that work flawlessly across all devices and screen sizes.
              </p>
            </div>
            <div className="bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold mb-2">Performance Focused</h4>
              <p className="text-foreground/80">
                Optimizing for speed and efficiency to provide the best user experience.
              </p>
            </div>
            <div className="bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-xl font-bold mb-2">Clean Code</h4>
              <p className="text-foreground/80">Writing maintainable, well-documented code following best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

