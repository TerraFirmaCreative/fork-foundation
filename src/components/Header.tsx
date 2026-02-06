import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="relative py-5 px-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative">
            {/* Earth/leaf inspired logo */}
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <defs>
                <linearGradient id="terraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--shaman-violet))" />
                  <stop offset="50%" stopColor="hsl(var(--shaman-magenta))" />
                  <stop offset="100%" stopColor="hsl(var(--shaman-gold))" />
                </linearGradient>
              </defs>
              {/* Outer circle - earth */}
              <circle cx="20" cy="20" r="18" fill="none" stroke="url(#terraGradient)" strokeWidth="1.5" />
              {/* Leaf/growth symbol */}
              <path 
                d="M20 8 C12 14 12 26 20 32 C28 26 28 14 20 8 Z" 
                fill="none" 
                stroke="url(#terraGradient)" 
                strokeWidth="1.5"
              />
              {/* Center vein */}
              <path 
                d="M20 12 L20 28" 
                stroke="url(#terraGradient)" 
                strokeWidth="1" 
                opacity="0.7"
              />
              {/* Small side veins */}
              <path 
                d="M20 16 L16 19 M20 20 L15 22 M20 24 L17 26" 
                stroke="url(#terraGradient)" 
                strokeWidth="0.8" 
                opacity="0.5"
              />
              <path 
                d="M20 16 L24 19 M20 20 L25 22 M20 24 L23 26" 
                stroke="url(#terraGradient)" 
                strokeWidth="0.8" 
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl tracking-wide text-foreground leading-tight">Terra Firma</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body">Creative</span>
          </div>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Shop Collection", "Gallery", "How It Works"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
          <button className="flex items-center gap-1 text-base text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            More <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button variant="cta" size="sm" className="hidden sm:flex font-body text-sm">
            Shop Now
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-shaman-violet to-shaman-magenta rounded-full text-[10px] font-medium text-white flex items-center justify-center">
              0
            </span>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;