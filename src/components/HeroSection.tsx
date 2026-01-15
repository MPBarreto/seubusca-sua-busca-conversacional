import { MessageCircle, Instagram } from 'lucide-react';
import { WhatsAppMockup } from './WhatsAppMockup';
import logo from '@/assets/seubusca-logo.png';

export function HeroSection() {
  const whatsappNumber = "5511999999999"; // Número será fornecido depois
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Oi!%20Quero%20buscar%20um%20produto`;

  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SeuBusca" className="h-12 w-12 object-contain" />
            <span className="font-bold text-xl text-foreground">SeuBusca</span>
          </div>
          <a 
            href="https://instagram.com/seubusca.zap" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">@seubusca.zap</span>
          </a>
        </header>

        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left side - Text */}
          <div className="flex-1 text-center lg:text-left max-w-lg">
            <div className="inline-block bg-primary/30 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 slide-up">
              🔍 Busca de produtos no WhatsApp
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 slide-up" style={{ animationDelay: '0.1s' }}>
              É só dizer o que você quer.{' '}
              <span className="text-secondary">O resto é com a gente.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
              Manda a descrição do produto, a gente encontra o melhor preço. 
              <span className="yellow-highlight font-semibold">Simples assim.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up" style={{ animationDelay: '0.3s' }}>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp pulse-glow"
              >
                <MessageCircle className="w-6 h-6" />
                Buscar no WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-muted-foreground text-sm slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span>Resposta rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span>Melhores preços</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>100% grátis</span>
              </div>
            </div>
          </div>

          {/* Right side - Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
