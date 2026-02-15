import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHowItWorks = () => {
    if (location.pathname === "/") {
      document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="relative py-5 px-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
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
            <span className="font-display text-xl tracking-wide text-foreground leading-tight">Unique Yoga Mats</span>
          </div>
        </Link>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => {
              if (location.pathname === "/") {
                document.getElementById("design-gallery")?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("design-gallery")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}
            className="text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            Shop
          </button>
          <button 
            onClick={scrollToHowItWorks}
            className="text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            How It Works
          </button>
          <Link 
            to="/about"
            className="text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide outline-none">
              More <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border/50 z-50">
              <DropdownMenuItem asChild>
                <Link to="/faqs" className="cursor-pointer">FAQs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/refund-policy" className="cursor-pointer">Refund & Returns Policy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/terms" className="cursor-pointer">Terms & Conditions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/privacy-policy" className="cursor-pointer">Privacy Policy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/shipping" className="cursor-pointer">Shipping</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="cursor-pointer">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <CartDrawer />
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;