"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
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
    // Handle form submission
    console.log(formState)
    // Reset form
    setFormState({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
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
                    <p className="text-foreground/80">sandissoft@sanzeisoft.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-full text-slate-700 dark:text-slate-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-foreground/80">6282335598046</p>
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
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
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

