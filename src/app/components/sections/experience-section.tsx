import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Développeur Web Junior",
    company: "Ministère de l'Intérieur",
    period: "En cours",
    description:
      "Développement d'applications web en apprentissage. Participation à des projets d'envergure nationale avec des technologies modernes. Travail en équipe selon les méthodologies Agile avec mise en place de tests unitaires et CI/CD.",
    technologies: ["TypeScript", "React", "Next.js", "Vue.js", "Nuxt", "PHP", "Symfony", "Docker", "PostgreSQL"],
  },
  {
    type: "education",
    title: "Master Ingénierie du Web",
    company: "ESGI - École Supérieure de Génie Informatique",
    period: "En cours",
    description:
      "Formation approfondie en ingénierie web avec focus sur les architectures modernes, le développement full-stack et les bonnes pratiques de développement.",
    technologies: ["Architecture Web", "DevOps", "Sécurité", "Performance"],
  },
  {
    type: "education",
    title: "Bachelor Architecture des Logiciels",
    company: "ESGI - École Supérieure de Génie Informatique",
    period: "Obtenu",
    description:
      "Formation complète en architecture logicielle, conception de systèmes et développement d'applications. Acquisition de solides bases en programmation et en méthodologies de développement.",
    technologies: ["C", "Java", "Python", "Architecture", "Design Patterns"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mon Parcours</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-3 md:mb-0">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-accent" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-accent" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
