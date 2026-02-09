import { Link, useNavigate, useLocation } from "react-router-dom";
import { FractalGrid } from "./SacredGeometry";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
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
    <footer className="relative py-16 px-6 overflow-hidden border-t border-border/30">
      <div className="texture-overlay" />
      <FractalGrid />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shaman-violet/40 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
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
            </Link>
            
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-foreground/70 mb-4 font-body tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const linkMap: Record<string, string> = { "About": "/about", "FAQ": "/faqs", "Returns": "/refund-policy", "Contact": "/contact", "Shipping": "/shipping", "Terms & Conditions": "/terms", "Privacy Policy": "/privacy-policy" };
                  const scrollMap: Record<string, string> = { "Reviews": "reviews", "Shop Collection": "design-gallery", "How It Works": "how-it-works" };
                  const to = linkMap[link];
                  const sectionId = scrollMap[link];
                  return (
                    <li key={link}>
                      {to ? (
                        <Link to={to} className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors font-body">
                          {link}
                        </Link>
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
        <div className="pt-8 border-t border-border/20 text-center text-xs text-muted-foreground/40 font-body">
          <p>© 2026 Unique Yoga Mats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;