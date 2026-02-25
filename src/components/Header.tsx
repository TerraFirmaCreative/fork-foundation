import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocaleNavigate } from "@/hooks/useLocaleNavigate";
import { useLocale, SupportedLocale, SUPPORTED_LOCALES, LOCALE_LABELS } from "@/lib/i18n";
import { CartDrawer } from "@/components/CartDrawer";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const localeNavigate = useLocaleNavigate();
  const rawNavigate = useNavigate();
  const location = useLocation();
  const { locale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLocale = (newLocale: SupportedLocale) => {
    if (newLocale === locale) return;
    const currentPath = location.pathname.replace(`/${locale}`, '') || '/';
    rawNavigate(`/${newLocale}${currentPath}`);
  };

  const isHomePage = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      localeNavigate("/");
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
        <LocaleLink to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
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
        </LocaleLink>
        
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
          <LocaleLink 
            to="/about"
            className="text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide"
          >
            About
          </LocaleLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide outline-none">
              More <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border/50 z-50">
              <DropdownMenuItem asChild>
                <LocaleLink to="/faqs" className="cursor-pointer">FAQs</LocaleLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <LocaleLink to="/refund-policy" className="cursor-pointer">Refund & Returns Policy</LocaleLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <LocaleLink to="/terms" className="cursor-pointer">Terms & Conditions</LocaleLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <LocaleLink to="/privacy-policy" className="cursor-pointer">Privacy Policy</LocaleLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <LocaleLink to="/shipping" className="cursor-pointer">Shipping</LocaleLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <LocaleLink to="/contact" className="cursor-pointer">Contact</LocaleLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Globe className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border/50 z-50 min-w-0 max-h-72 overflow-y-auto">
              {SUPPORTED_LOCALES.map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`cursor-pointer ${locale === loc ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                >
                  {LOCALE_LABELS[loc]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
                <LocaleLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-body text-foreground hover:text-primary transition-colors tracking-wide"
                >
                  About
                </LocaleLink>
                <div className="border-t border-border/30 pt-4 flex flex-col gap-4">
                  <LocaleLink to="/faqs" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">FAQs</LocaleLink>
                  <LocaleLink to="/refund-policy" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Refund & Returns</LocaleLink>
                  <LocaleLink to="/terms" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</LocaleLink>
                  <LocaleLink to="/privacy-policy" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</LocaleLink>
                  <LocaleLink to="/shipping" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Shipping</LocaleLink>
                  <LocaleLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Contact</LocaleLink>
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
