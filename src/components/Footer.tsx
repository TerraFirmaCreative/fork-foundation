import { useLocation } from "react-router-dom";
import { FractalGrid } from "./SacredGeometry";
import { FractalGrid } from "./SacredGeometry";
import { toast } from "sonner";

import LocaleLink from "./LocaleLink";
import { useLocaleNavigate } from "@/hooks/useLocaleNavigate";
import { useLocale } from "@/lib/i18n";
import { subscribeToNewsletter } from "@/lib/shopify";

const Footer = () => {
  const navigate = useLocaleNavigate();
  const location = useLocation();
  const { locale } = useLocale();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isHomePage = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

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

  const footerLinks = {
    Product: ["Shop Collection", "How It Works"],
    Company: ["About", "Reviews"],
    Support: ["FAQ", "Contact", "Shipping", "Returns", "Terms & Conditions", "Privacy Policy"],
  };

  return (
    <footer className="relative py-10 px-6 overflow-hidden border-t border-border/30">
      <div className="texture-overlay" />
      <FractalGrid />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shaman-violet/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <LocaleLink to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerTerraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--shaman-violet))" />
                      <stop offset="50%" stopColor="hsl(var(--shaman-magenta))" />
                      <stop offset="100%" stopColor="hsl(var(--shaman-gold))" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerTerraGradient)" strokeWidth="1.5" />
                  <path d="M20 8 C12 14 12 26 20 32 C28 26 28 14 20 8 Z" fill="none" stroke="url(#footerTerraGradient)" strokeWidth="1.5" />
                  <path d="M20 12 L20 28" stroke="url(#footerTerraGradient)" strokeWidth="1" opacity="0.7" />
                  <path d="M20 16 L16 19 M20 20 L15 22 M20 24 L17 26" stroke="url(#footerTerraGradient)" strokeWidth="0.8" opacity="0.5" />
                  <path d="M20 16 L24 19 M20 20 L25 22 M20 24 L23 26" stroke="url(#footerTerraGradient)" strokeWidth="0.8" opacity="0.5" />
                </svg>
              </div>
              <span className="font-display text-lg text-foreground">Unique Yoga Mats</span>
            </LocaleLink>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-sm font-medium text-foreground/70 mb-4 font-body tracking-wide">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const linkMap: Record<string, string> = { "About": "/about", "FAQ": "/faqs", "Returns": "/refund-policy", "Contact": "/contact", "Shipping": "/shipping", "Terms & Conditions": "/terms", "Privacy Policy": "/privacy-policy" };
                  const scrollMap: Record<string, string> = { "Reviews": "reviews", "Shop Collection": "design-gallery", "How It Works": "how-it-works" };
                  const to = linkMap[link];
                  const sectionId = scrollMap[link];
                  return (
                    <li key={link}>
                      {to ? (
                        <LocaleLink to={to} className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors font-body">
                          {link}
                        </LocaleLink>
                      ) : sectionId ? (
                        <button onClick={() => scrollToSection(sectionId)} className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors font-body">
                          {link}
                        </button>
                      ) : (
                        <a href="#" className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors font-body">
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/20 flex flex-col items-center gap-4">
          {/* Payment Method Icons - Reduced Size & Prominence */}
          <div className="flex items-center gap-2 flex-wrap justify-center opacity-50 hover:opacity-80 transition-opacity duration-300">
            {[
              { name: "Amex", bg: "#006FCF", text: "AMEX", textSize: "text-[5px]" },
              { name: "Apple Pay", bg: "#000", icon: "apple" },
              { name: "Google Pay", bg: "#fff", icon: "google" },
              { name: "Mastercard", bg: "#1A1F36", icon: "mastercard" },
              { name: "PayPal", bg: "#003087", icon: "paypal" },
              { name: "Shop Pay", bg: "#5A31F4", icon: "shop" },
              { name: "Union Pay", bg: "#E21836", text: "UP", textSize: "text-[6px]" },
              { name: "Visa", bg: "#1A1F71", text: "VISA", textSize: "text-[6px]" },
            ].map((card) => (
              <div
                key={card.name}
                className="w-8 h-5 rounded flex items-center justify-center border border-border/20 overflow-hidden shadow-sm"
                style={{ backgroundColor: card.bg }}
                title={card.name}
              >
                {card.text ? (
                  <span className={`text-white font-bold ${card.textSize} tracking-wider leading-none`}>{card.text}</span>
                ) : card.icon === "apple" ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                ) : card.icon === "google" ? (
                  <span className="text-[6px] font-bold text-gray-700">G Pay</span>
                ) : card.icon === "mastercard" ? (
                  <svg width="14" height="8" viewBox="0 0 20 12"><circle cx="7" cy="6" r="5" fill="#EB001B"/><circle cx="13" cy="6" r="5" fill="#F79E1B"/><path d="M10 1.8a5 5 0 010 8.4 5 5 0 000-8.4z" fill="#FF5F00"/></svg>
                ) : card.icon === "paypal" ? (
                  <span className="text-[5px] font-bold text-white tracking-tight">PayPal</span>
                ) : card.icon === "shop" ? (
                  <span className="text-[5px] font-bold text-white tracking-tight">Shop</span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-xs text-muted-foreground/40 font-body">
            <p>© 2026 Unique Yoga Mats. All rights reserved.</p>
            
            {/* Follow on Shop */}
            <a
              href="https://shop.app/unique-yoga-mats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5A31F4]/90 hover:bg-[#5A31F4] transition-colors text-white text-[10px] font-medium opacity-80 hover:opacity-100"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
              Follow on Shop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
