import { Instagram, Heart } from 'lucide-react';
import logo from '@/assets/seubusca-logo.png';

export function Footer() {
  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SeuBusca" className="h-10 w-10 object-contain" />
            <div>
              <span className="font-bold text-foreground">SeuBusca</span>
              <p className="text-xs text-muted-foreground">Você pede, a gente encontra.</p>
            </div>
          </div>

          <a 
            href="https://instagram.com/seubusca.zap" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@seubusca.zap</span>
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-destructive fill-destructive" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
