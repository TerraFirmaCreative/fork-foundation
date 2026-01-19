import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="relative py-6 px-6">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <nav className="max-w-5xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-terra-clay via-terra-sand to-terra-sage p-[1.5px]">
            <div className="w-full h-full rounded-full bg-background" />
          </div>
          <span className="font-display text-lg tracking-wide text-foreground">Unique Yoga Mats</span>
        </div>
        
        {/* Nav Links - simplified */}
        <div className="hidden md:flex items-center gap-10">
          {["Gallery", "About", "FAQ"].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex font-body text-sm text-muted-foreground hover:text-foreground">
            Design Your Mat
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;