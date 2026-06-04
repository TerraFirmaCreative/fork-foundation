import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import { useLocaleNavigate } from "@/hooks/useLocaleNavigate";
import { useLocale, SupportedLocale, SUPPORTED_LOCALES, LOCALE_LABELS, getCountryForLocale } from "@/lib/i18n";
import { CartDrawer } from "@/components/CartDrawer";
import cosmicIglooMark from "@/assets/cosmic-igloo-mark.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cartStore";

const Header = () => {
  const localeNavigate = useLocaleNavigate();
  const rawNavigate = useNavigate();
  const location = useLocation();
  const { locale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { updateLocale } = useCartStore()

  const switchLocale = (newLocale: SupportedLocale) => {
    if (newLocale === locale) return;
    const currentPath = location.pathname.replace(`/${locale}`, '') || '/';
    updateLocale(getCountryForLocale(newLocale))
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
        <LocaleLink to="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity" aria-label="Cosmic Igloo — home">
          <img
            src={cosmicIglooMark}
            alt="Cosmic Igloo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <span className="font-display text-base md:text-lg tracking-[0.32em] text-foreground/90 uppercase" style={{ fontWeight: 500 }}>
            Cosmic Igloo
          </span>
        </LocaleLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("design-gallery")}
            className="font-display text-xs tracking-[0.24em] uppercase text-foreground/80 hover:text-foreground transition-colors"
            style={{ fontWeight: 500 }}
          >
            Shop
          </button>
          <button
            onClick={scrollToHowItWorks}
            className="font-display text-xs tracking-[0.24em] uppercase text-foreground/80 hover:text-foreground transition-colors"
            style={{ fontWeight: 500 }}
          >
            How It Works
          </button>
          <LocaleLink
            to="/about"
            className="font-display text-xs tracking-[0.24em] uppercase text-foreground/80 hover:text-foreground transition-colors"
            style={{ fontWeight: 500 }}
          >
            About
          </LocaleLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="font-display text-xs tracking-[0.24em] uppercase text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                style={{ fontWeight: 500 }}
              >
                More <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border/50 z-50">
              {[
                { to: "/faqs", label: "FAQs" },
                { to: "/shipping", label: "Shipping" },
                { to: "/refund-policy", label: "Refund & Returns" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/contact", label: "Contact" },
                { to: "/blog", label: "Blog" },
              ].map((item) => (
                <DropdownMenuItem key={item.to} asChild className="focus:bg-transparent data-[highlighted]:bg-transparent focus:text-primary data-[highlighted]:text-primary">
                  <LocaleLink to={item.to} className="font-display tracking-[0.2em] uppercase text-xs cursor-pointer">{item.label}</LocaleLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change language and region" className="text-muted-foreground hover:text-foreground">
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
              <Button variant="ghost" size="icon" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="md:hidden text-muted-foreground hover:text-foreground">
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
                  <LocaleLink to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-base font-body text-muted-foreground hover:text-foreground transition-colors">Blog</LocaleLink>
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
