import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="relative py-5 px-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shaman-violet via-shaman-magenta to-shaman-gold p-[1.5px]">
            <div className="w-full h-full rounded-full bg-background" />
          </div>
          <span className="font-display text-xl tracking-wide text-foreground">Unique Yoga Mats</span>
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Design Your Mat", "Gallery", "How It Works"].map((link) => (
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
          <Button variant="cta" size="sm" className="hidden sm:flex font-body text-sm">
            Create Now
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