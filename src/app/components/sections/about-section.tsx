import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">À propos de moi</h2>

          <Card className="p-8 md:p-12 bg-card">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Passionné par le développement web et les technologies modernes, je suis actuellement en Master
              d'Ingénierie du Web après avoir obtenu mon Bachelor en Architecture des Logiciels. Mon parcours académique
              m'a permis d'acquérir une solide base technique et une vision globale de la conception logicielle.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              En tant que Développeur Junior en apprentissage au Ministère de l'Intérieur, je mets en pratique mes
              compétences sur des projets concrets et d'envergure. Cette expérience me permet de développer mon
              expertise technique tout en contribuant à des applications qui ont un impact réel.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ce qui me motive le plus dans mon métier, c'est la possibilité de créer des solutions innovantes et de
              résoudre des problèmes complexes. Je suis constamment en apprentissage pour rester à jour avec les
              dernières technologies et les meilleures pratiques du développement web.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
