import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, ChevronDown, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="relative py-4 px-6 overflow-hidden">
      {/* Cosmic background matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsla(280, 80%, 50%, 0.15) 0%, transparent 40%),
                           radial-gradient(circle at 80% 50%, hsla(320, 70%, 50%, 0.1) 0%, transparent 35%)`
        }} />
      </div>
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-psychedelic-purple via-psychedelic-pink to-psychedelic-cyan p-[2px] shadow-lg">
            <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-psychedelic-gold" />
            </div>
          </div>
          <span className="font-display text-xl font-bold text-gradient">MatFlow</span>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "My Designs", "Browse"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            More <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground hover:bg-card/50">
            <Globe className="w-4 h-4 mr-1" />
            EN
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground hover:bg-card/50">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink rounded-full text-xs font-bold text-white flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;