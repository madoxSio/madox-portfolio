
import { Navigation } from "@/app/components/layout/navigation"
import { HeroSection } from "@/app/components/sections/hero-section"
import { AboutSection } from "@/app/components/sections/about-section"
import { ExperienceSection } from "@/app/components/sections/experience-section"
import { SkillsSection } from "@/app/components/sections/skill-section"
import { Footer } from "@/app/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  )
}
