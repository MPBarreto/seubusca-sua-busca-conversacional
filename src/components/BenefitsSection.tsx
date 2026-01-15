import { MessageSquare, Zap, ShoppingBag, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: MessageSquare,
    title: "Fala como quiser",
    description: "Sem filtros complicados. Só descreve o que você quer.",
    emoji: "💬"
  },
  {
    icon: Zap,
    title: "Resposta na hora",
    description: "Em segundos você recebe as melhores opções.",
    emoji: "⚡"
  },
  {
    icon: ShoppingBag,
    title: "Melhores preços",
    description: "A gente vasculha a internet pra você.",
    emoji: "💸"
  },
  {
    icon: ThumbsUp,
    title: "Zero complicação",
    description: "Sem baixar app, sem criar conta. Só WhatsApp.",
    emoji: "👌"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Por que usar o <span className="text-primary">SeuBusca</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A gente facilita sua vida. Você pede, a gente encontra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.emoji}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
