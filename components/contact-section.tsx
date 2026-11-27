"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Github, Instagram, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formState.subject || `Pesan dari ${formState.name}`)
    const body = encodeURIComponent(
      `Nama: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    )
    window.location.href = `mailto:sanzeidev@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="w-full">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-foreground/80">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me using the
            form below or through my contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div className="bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-full text-slate-700 dark:text-slate-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:sanzeidev@gmail.com" className="text-foreground/80 hover:underline">sanzeidev@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-full text-slate-700 dark:text-slate-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="https://wa.me/6285167159260" target="_blank" rel="noreferrer" className="text-foreground/80 hover:underline">085167159260</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-full text-slate-700 dark:text-slate-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-foreground/80">Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600" asChild>
                    <a href="https://www.instagram.com/sanzei.soft/" target="_blank" rel="noreferrer" aria-label="Instagram Sanzei Soft"><Instagram className="h-5 w-5" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600" asChild>
                    <a href="https://www.facebook.com/sanzei.mashiro" target="_blank" rel="noreferrer" aria-label="Facebook Sanzei Mashiro"><Facebook className="h-5 w-5" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600" asChild>
                    <a href="https://github.com/Sanzei-IT" target="_blank" rel="noreferrer" aria-label="GitHub Sanzei IT"><Github className="h-5 w-5" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600" asChild>
                    <a href="https://wa.me/6285167159260" target="_blank" rel="noreferrer" aria-label="WhatsApp Sanzei Soft"><Phone className="h-5 w-5" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-slate-200 dark:border-slate-800"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-slate-200 dark:border-slate-800"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-slate-200 dark:border-slate-800"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-background border-slate-200 dark:border-slate-800"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

