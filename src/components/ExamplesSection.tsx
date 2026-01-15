const examples = [
  {
    user: "Quero um tênis branco até 300 reais",
    bot: "Achei 3 opções boas 👇\nEsse aqui tá com o melhor preço hoje."
  },
  {
    user: "Preciso de um fone bluetooth pra academia",
    bot: "Boa. Separei uns que não caem da orelha 💪"
  },
  {
    user: "Notebook bom pra trabalho home office",
    bot: "Olha esse aqui! Tá com desconto de 40% 🔥"
  }
];

export function ExamplesSection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Veja como é <span className="text-secondary">fácil</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Só mandar uma mensagem. Sério, é só isso.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="space-y-3">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-whatsapp-light border border-secondary/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                  <p className="text-foreground">{example.user}</p>
                </div>
              </div>
              
              {/* Bot response */}
              <div className="flex justify-start">
                <div className="bg-card shadow-card rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-foreground whitespace-pre-line">{example.bot}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
