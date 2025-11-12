"use client"

import { Navigation } from "@/app/components/layout/navigation"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const rotatingTexts = [
    "Développeur Web Full-Stack",
    "Passionné par le Code",
    "Apprenti au Ministère de l'Intérieur",
    "Créateur d'Expériences Web",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      <Navigation />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-in">
          Madox
        </h1>
        <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto text-balance animate-text-slide-up">
            {rotatingTexts[currentText]}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="#about">Découvrir mon travail</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </a>
    </section>
  )
}
