import { useState, useEffect } from 'react';
import { Send, MoreVertical, Phone, Video } from 'lucide-react';
import logo from '@/assets/seubusca-logo.png';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isProduct?: boolean;
  productImage?: string;
  productName?: string;
  productPrice?: string;
}

const conversations = [
  {
    userMessage: "Quero um tênis branco até 300 reais",
    botResponse: "Achei 3 opções boas! 👟",
    product: {
      name: "Tênis Nike Air Force 1",
      price: "R$ 279,90",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"
    }
  },
  {
    userMessage: "Preciso de um fone bluetooth pra academia",
    botResponse: "Separei uns que não caem da orelha 💪",
    product: {
      name: "JBL Tune 520BT",
      price: "R$ 189,00",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
    }
  },
  {
    userMessage: "Cadeira gamer boa e barata",
    botResponse: "Olha esse aqui! Melhor custo-benefício 🎮",
    product: {
      name: "Cadeira Gamer ThunderX3",
      price: "R$ 649,00",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=200&h=200&fit=crop"
    }
  }
];

export function WhatsAppMockup() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'user-typing' | 'bot-typing' | 'showing-product'>('idle');

  useEffect(() => {
    const runConversation = async () => {
      const conv = conversations[conversationIndex];
      
      // User typing
      setPhase('user-typing');
      await new Promise(r => setTimeout(r, 800));
      
      // User message appears
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: conv.userMessage,
        sender: 'user'
      }]);
      
      // Bot typing
      setPhase('bot-typing');
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1500));
      setIsTyping(false);
      
      // Bot response
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: conv.botResponse,
        sender: 'bot'
      }]);
      
      await new Promise(r => setTimeout(r, 500));
      
      // Product card
      setPhase('showing-product');
      setMessages(prev => [...prev, {
        id: Date.now() + 2,
        text: '',
        sender: 'bot',
        isProduct: true,
        productImage: conv.product.image,
        productName: conv.product.name,
        productPrice: conv.product.price
      }]);
      
      // Wait before next conversation
      await new Promise(r => setTimeout(r, 3000));
      
      // Reset for next conversation
      setMessages([]);
      setPhase('idle');
      setConversationIndex(prev => (prev + 1) % conversations.length);
    };

    const timer = setTimeout(runConversation, 1000);
    return () => clearTimeout(timer);
  }, [conversationIndex]);

  return (
    <div className="phone-mockup w-[320px] md:w-[360px] float-animation">
      <div className="whatsapp-screen">
        {/* WhatsApp Header */}
        <div className="bg-whatsapp px-4 py-3 flex items-center gap-3">
          <img 
            src={logo} 
            alt="SeuBusca" 
            className="w-10 h-10 rounded-full bg-card object-cover"
          />
          <div className="flex-1">
            <p className="text-white font-bold text-sm">SeuBusca</p>
            <p className="text-white/80 text-xs">online</p>
          </div>
          <div className="flex gap-4 text-white/80">
            <Video className="w-5 h-5" />
            <Phone className="w-5 h-5" />
            <MoreVertical className="w-5 h-5" />
          </div>
        </div>

        {/* Chat Area */}
        <div 
          className="h-[400px] md:h-[450px] p-4 flex flex-col gap-2 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, hsl(142 30% 95%) 0%, hsl(142 20% 92%) 100%)' }}
        >
          {/* Welcome message always visible */}
          <div className="chat-bubble-received mb-2 message-appear">
            <p className="text-sm text-foreground">
              Oi! 👋 Me conta o que você tá procurando
            </p>
          </div>

          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`message-appear ${msg.sender === 'user' ? 'chat-bubble-sent' : 'chat-bubble-received'}`}
            >
              {msg.isProduct ? (
                <div className="flex gap-3 items-center">
                  <img 
                    src={msg.productImage} 
                    alt={msg.productName}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{msg.productName}</p>
                    <p className="text-lg font-bold text-whatsapp">{msg.productPrice}</p>
                    <p className="text-xs text-whatsapp-dark underline cursor-pointer">Ver oferta →</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-foreground">{msg.text}</p>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chat-bubble-received typing-indicator">
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-card px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-muted rounded-full px-4 py-2 flex items-center">
            <span className="text-muted-foreground text-sm">Mensagem</span>
          </div>
          <button className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
