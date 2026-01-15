import { MessageCircle, ArrowRight } from 'lucide-react';
import logo from '@/assets/seubusca-logo.png';

export function CTASection() {
  const whatsappNumber = "5511999999999"; // Número será fornecido depois
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Oi!%20Quero%20buscar%20um%20produto`;

  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src={logo} 
            alt="SeuBusca" 
            className="w-24 h-24 mx-auto mb-8 float-animation"
          />
          
          <h2 className="text-3xl md:text-5xl font-black text-background mb-6">
            Pronto pra economizar tempo e dinheiro?
          </h2>
          
          <p className="text-xl text-background/80 mb-10">
            Manda uma mensagem agora. É grátis, rápido e fácil.
          </p>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex pulse-glow text-xl px-10 py-5"
          >
            <MessageCircle className="w-7 h-7" />
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-background/60 text-sm mt-8">
            Sem cadastro • Sem app • Só WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
