"use client"

import type React from "react"
import { Github, Linkedin, Mail, Twitter, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from "emailjs-com"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
]

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_gs0qw9k", //  Service ID
        "template_z8xg49l", // Template ID
        formData,
        "SJJVIHtDzvzhNwtk6" //  Public Key
      )
      .then(
        () => {
          alert("✅ Message envoyé avec succès !")
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          console.error("Erreur:", error.text)
          alert("❌ Une erreur est survenue. Réessaie plus tard.")
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-balance">Contactez-moi</h2>
            <p className="text-muted-foreground mb-6">
              Envoyez-moi un message et je vous répondrai dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 backdrop-blur-sm"
              />
              <Input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 backdrop-blur-sm"
              />
              <Textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-background/50 backdrop-blur-sm resize-none"
              />
              <Button type="submit" size="lg" className="w-full group" disabled={loading}>
                <Send className={`mr-2 h-4 w-4 transition-transform ${loading ? "animate-pulse" : "group-hover:translate-x-1"}`} />
                {loading ? "Envoi..." : "Envoyer le message"}
              </Button>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-balance">Localisation</h2>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <p>ESGI - École Supérieure de Génie Informatique</p>
            </div>

            <div className="rounded-lg overflow-hidden border border-border shadow-lg h-[300px] lg:h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2899789891844!2d2.3499999999999996!3d48.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3f8b5e5555%3A0x1234567890abcdef!2sESGI%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation ESGI"
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-6 pb-8 border-b border-border">
          <h3 className="text-lg font-semibold">Suivez-moi</h3>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all bg-transparent"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
