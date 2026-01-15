import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 hero-gradient">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Button variant="nav" size="sm">Home</Button>
          <Button variant="nav" size="sm">My Designs</Button>
          <Button variant="nav" size="sm">Browse</Button>
          <Button variant="nav" size="sm" className="flex items-center gap-1">
            More <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="nav" size="sm" className="flex items-center gap-1">
            <Globe className="w-4 h-4" /> GB <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
