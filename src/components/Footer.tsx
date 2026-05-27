import { useLocation } from "react-router-dom";
import { FractalGrid } from "./SacredGeometry";
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
            <LocaleLink to="/" className="flex items-center gap-3 mb-4 hover:opacity-85 transition-opacity">
              <img
                src={cosmicIglooMark}
                alt="Cosmic Igloo"
                className="w-7 h-7 object-contain"
              />
              <span className="font-display text-base tracking-[0.32em] text-foreground/90 uppercase" style={{ fontWeight: 500 }}>
                Cosmic Igloo
              </span>
            </LocaleLink>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-xs font-display tracking-[0.28em] uppercase text-foreground/70 mb-4" style={{ fontWeight: 500 }}>{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const linkMap: Record<string, string> = { "About": "/about", "FAQ": "/faqs", "Returns": "/refund-policy", "Contact": "/contact", "Shipping": "/shipping", "Terms & Conditions": "/terms", "Privacy Policy": "/privacy-policy" };
                  const scrollMap: Record<string, string> = { "Reviews": "reviews", "Shop Collection": "design-gallery", "How It Works": "how-it-works" };
                  const to = linkMap[link];
                  const sectionId = scrollMap[link];
                  return (
                    <li key={link}>
                      {to ? (
                        <LocaleLink to={to} className="text-xs font-display tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors" style={{ fontWeight: 500 }}>
                          {link}
                        </LocaleLink>
                      ) : sectionId ? (
                        <button onClick={() => scrollToSection(sectionId)} className="text-xs font-display tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors" style={{ fontWeight: 500 }}>
                          {link}
                        </button>
                      ) : (
                        <a href="#" className="text-xs font-display tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors" style={{ fontWeight: 500 }}>
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Subscribe Column */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-display tracking-[0.28em] uppercase text-foreground mb-2" style={{ fontWeight: 500 }}>Subscribe</h4>
            <p className="text-xs text-foreground/70 mb-4 font-display tracking-wide">Early access. New designs. Community stories.</p>
            <form className="flex items-center border border-foreground/30 hover:border-foreground/50 focus-within:border-shaman-gold/60 rounded-md bg-background/30 px-3 py-1 mb-3 max-w-xs transition-colors" onSubmit={async (e) => {
              e.preventDefault();
              if (isSubmitting || !email) return;
              setIsSubmitting(true);
              const submittedEmail = email;
              const result = await subscribeToNewsletter(submittedEmail);
              setIsSubmitting(false);
              if (result.success) {
                setEmail("");
                // Fire-and-forget welcome email (idempotent on the email address)
                const idempotencyKey = `newsletter-welcome-${submittedEmail.toLowerCase()}`;
                supabase.functions.invoke('send-transactional-email', {
                  body: {
                    templateName: 'newsletter-welcome',
                    recipientEmail: submittedEmail,
                    idempotencyKey,
                  },
                }).catch((err) => console.error('Welcome email failed:', err));
                navigate("/subscribe/thank-you");
              } else {
                toast.error(result.error || "Failed to subscribe. Please try again.");
              }
            }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-foreground/50 text-foreground py-1.5 font-display tracking-wide"
                required
                disabled={isSubmitting}
              />
              <button type="submit" disabled={isSubmitting} aria-label="Subscribe" className="w-8 h-8 rounded-full bg-shaman-violet/20 hover:bg-shaman-gold/30 hover:text-shaman-gold flex items-center justify-center transition-colors text-foreground flex-shrink-0 ml-2">
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            <p className="text-[11px] text-foreground/50 font-display tracking-wide mb-6">No spam. Unsubscribe anytime.</p>

          </div>

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
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                ) : card.icon === "google" ? (
                  <span className="text-[6px] font-bold text-gray-700">G Pay</span>
                ) : card.icon === "mastercard" ? (
                  <svg width="14" height="8" viewBox="0 0 20 12"><circle cx="7" cy="6" r="5" fill="#EB001B" /><circle cx="13" cy="6" r="5" fill="#F79E1B" /><path d="M10 1.8a5 5 0 010 8.4 5 5 0 000-8.4z" fill="#FF5F00" /></svg>
                ) : card.icon === "paypal" ? (
                  <span className="text-[5px] font-bold text-white tracking-tight">PayPal</span>
                ) : card.icon === "shop" ? (
                  <span className="text-[5px] font-bold text-white tracking-tight">Shop</span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="text-xs text-muted-foreground/40 font-display tracking-wide text-center">
            <p>© 2026 Cosmic Igloo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
