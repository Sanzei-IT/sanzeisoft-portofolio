import Navbar from "@/components/navbar"
import MobileNav from "@/components/mobile-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Script from "next/script"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <Script id="dark-mode-script" strategy="beforeInteractive">
        {`
          // Check for dark mode preference
          if (localStorage.getItem('darkMode') === 'true' || 
              (!localStorage.getItem('darkMode') && 
               window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        `}
      </Script>
      <Navbar />
      <main className="container mx-auto px-4 pb-16 md:pb-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <MobileNav />
      <Footer />
    </div>
  )
}

