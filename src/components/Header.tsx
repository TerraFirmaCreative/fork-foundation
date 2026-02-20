import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";
import SocialLinks from "@/components/SocialLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToHowItWorks = () => scrollToSection("how-it-works");

  return (
    <header className="relative py-5 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/60 backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shaman-gold/20 to-transparent" />
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 relative">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <defs>
                <linearGradient id="terraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--shaman-violet))" />
                  <stop offset="50%" stopColor="hsl(var(--shaman-magenta))" />
                  <stop offset="100%" stopColor="hsl(var(--shaman-gold))" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="none" stroke="url(#terraGradient)" strokeWidth="1.5" />
              <path d="M20 8 C12 14 12 26 20 32 C28 26 28 14 20 8 Z" fill="none" stroke="url(#terraGradient)" strokeWidth="1.5" />
              <path d="M20 12 L20 28" stroke="url(#terraGradient)" strokeWidth="1" opacity="0.7" />
              <path d="M20 16 L16 19 M20 20 L15 22 M20 24 L17 26" stroke="url(#terraGradient)" strokeWidth="0.8" opacity="0.5" />
              <path d="M20 16 L24 19 M20 20 L25 22 M20 24 L23 26" stroke="url(#terraGradient)" strokeWidth="0.8" opacity="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl tracking-wide text-foreground leading-tight">Unique Yoga Mats</span>
          </div>
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => scrollToSection("design-gallery")}
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
          <SocialLinks className="hidden md:flex" />
          <CartDrawer />

          {/* Mobile Hamburger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card border-border/50 pt-16">
              <nav className="flex flex-col gap-6 px-2">
                <button
                  onClick={() => scrollToSection("design-gallery")}
                  className="text-lg font-body text-foreground hover:text-primary transition-colors text-left tracking-wide"
                >
                  Shop
                </button>
                <button
                  onClick={scrollToHowItWorks}
                  className="text-lg font-body text-foreground hover:text-primary transition-colors text-left tracking-wide"
                >
                  How It Works
                </button>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-body text-foreground hover:text-primary transition-colors tracking-wide"
                >
                  About
                </Link>
                <div className="border-t border-border/30 pt-4 flex flex-col gap-4">
                  <Link to="/faqs" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">FAQs</Link>
                  <Link to="/refund-policy" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Refund & Returns</Link>
                  <Link to="/terms" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
                  <Link to="/privacy-policy" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                  <Link to="/shipping" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Shipping</Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;