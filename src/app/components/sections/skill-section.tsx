import { Card } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Wrench, TestTube, Terminal, Smartphone } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Langages",
    skills: ["TypeScript", "JavaScript", "PHP", "Python", "Java", "C"],
  },
  {
    icon: Layout,
    title: "Front-End",
    skills: ["React", "Next.js", "Vue.js", "Nuxt", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Back-End",
    skills: ["Node.js", "Symfony", "REST API", "NestJS","Fastify"],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "Prisma"],
  },
  {
    icon: Wrench,
    title: "DevOps & Outils",
    skills: ["Docker", "CI/CD", "Git", "Agile"],
  },
  {
    icon: TestTube,
    title: "Qualité & Tests",
    skills: ["Tests Unitaires", "Code Review"],
  },
  {
    icon: Terminal,
    title: "Systèmes & Environnements",
    skills: ["Linux", "Bash", "Shell Scripting"],
  },
  {
    icon: Smartphone,
    title: "Mobile (En cours)",
    skills: ["React Native", "Flutter", "Développement Mobile"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
