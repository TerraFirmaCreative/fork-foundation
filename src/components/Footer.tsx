import { Instagram, Twitter } from "lucide-react";
import { FractalGrid } from "./SacredGeometry";

const Footer = () => {
  const footerLinks = {
    Product: ["Shop Collection", "Browse Gallery", "How It Works", "Pricing"],
    Company: ["About Us", "Sustainability", "Reviews", "Press"],
    Support: ["FAQ", "Contact", "Shipping Info", "Returns"],
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-shaman-violet via-shaman-magenta to-shaman-gold p-[1px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="font-display text-lg text-foreground">Unique Yoga Mats</span>
            </div>
            <p className="text-sm text-muted-foreground/60 font-body mb-6 leading-relaxed">
              AI-designed custom yoga mats.<br />
              Premium quality, truly unique.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground/40 hover:text-shaman-violet transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground/40 hover:text-shaman-violet transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-foreground/70 mb-4 font-body tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors font-body"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/40 font-body">
          <p>© 2024 Unique Yoga Mats. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal/60" />
              Eco-Friendly
            </span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;