import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 60%)`
        }} />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(2px 2px at 10% 20%, white 50%, transparent 100%),
                           radial-gradient(2px 2px at 30% 60%, rgba(255,255,255,0.8) 50%, transparent 100%),
                           radial-gradient(1px 1px at 50% 30%, white 50%, transparent 100%),
                           radial-gradient(2px 2px at 70% 80%, rgba(255,255,255,0.7) 50%, transparent 100%),
                           radial-gradient(1px 1px at 90% 40%, white 50%, transparent 100%),
                           radial-gradient(2px 2px at 15% 80%, rgba(255,255,255,0.6) 50%, transparent 100%),
                           radial-gradient(1px 1px at 85% 20%, white 50%, transparent 100%)`
        }} />
      </div>
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-8">
          <span className="font-display text-xl font-bold text-white tracking-tight">
            UniqueYogaMats.com
          </span>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="nav" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">Home</Button>
            <Button variant="nav" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">My Designs</Button>
            <Button variant="nav" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">Browse</Button>
            <Button variant="nav" size="sm" className="flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/10">
              More <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="nav" size="sm" className="flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/10">
            <Globe className="w-4 h-4" /> GB <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/90 hover:text-white hover:bg-white/10">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
