import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="relative py-5 px-6">
      <div className="absolute inset-0 bg-background" />
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-earth-clay/20 border border-earth-clay/40" />
          <span className="font-display text-xl tracking-wide text-foreground">Unique Yoga Mats</span>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Studio", "Collection", "Process"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            More <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Globe className="w-4 h-4 mr-1.5" />
            EN
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-earth-clay rounded-full text-[10px] font-medium text-background flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;