import { useLocation } from "react-router-dom";
import LocaleLink from "./LocaleLink";
import { useLocaleNavigate } from "@/hooks/useLocaleNavigate";
import { useLocale } from "@/lib/i18n";
import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/shopify";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import cosmicIglooMark from "@/assets/cosmic-igloo-mark.png";

const Footer = () => {
  const navigate = useLocaleNavigate();
  const location = useLocation();
  const { locale } = useLocale();

  const isHomePage = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  const [email, setEmail] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="relative py-5 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60 backdrop-blur-sm" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shaman-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer row — mirrors header layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-2">
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

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
            <button
              onClick={() => scrollToSection("design-gallery")}
              className="font-display text-sm tracking-[0.28em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              style={{ fontWeight: 500 }}
            >
              Shop
            </button>
            <LocaleLink
              to="/about"
              className="font-display text-sm tracking-[0.28em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              style={{ fontWeight: 500 }}
            >
              About
            </LocaleLink>
            <LocaleLink
              to="/faqs"
              className="font-display text-sm tracking-[0.28em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              style={{ fontWeight: 500 }}
            >
              FAQs
            </LocaleLink>
            <LocaleLink
              to="/contact"
              className="font-display text-sm tracking-[0.28em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              style={{ fontWeight: 500 }}
            >
              Contact
            </LocaleLink>
            <LocaleLink
              to="/blog"
              className="font-display text-sm tracking-[0.28em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              style={{ fontWeight: 500 }}
            >
              Blog
            </LocaleLink>
          </nav>

          {/* Subscribe */}
          <form className="flex items-center border-b border-foreground/20 pb-1 max-w-[220px]" onSubmit={async (e) => {
            e.preventDefault();
            if (isSubmitting || !email) return;
            setIsSubmitting(true);
            const result = await subscribeToNewsletter(email);
            setIsSubmitting(false);
            if (result.success) {
              setEmail("");
              navigate("/subscribe/thank-you");
            } else {
              toast.error(result.error || "Failed to subscribe. Please try again.");
            }
          }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/40 text-foreground py-1"
              required
              disabled={isSubmitting}
            />
            <button type="submit" disabled={isSubmitting} className="w-8 h-8 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors text-foreground/80 flex-shrink-0 ml-2">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 mt-4 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <LocaleLink to="/shipping" className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors font-body">Shipping</LocaleLink>
            <LocaleLink to="/refund-policy" className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors font-body">Returns</LocaleLink>
            <LocaleLink to="/terms" className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors font-body">Terms & Conditions</LocaleLink>
            <LocaleLink to="/privacy-policy" className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors font-body">Privacy Policy</LocaleLink>
          </div>
          <p className="text-xs text-muted-foreground/40 font-body">© 2026 Cosmic Igloo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;