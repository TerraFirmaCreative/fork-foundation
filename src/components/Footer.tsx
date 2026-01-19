import { Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Design Your Mat", "Gallery", "Pricing"],
    Support: ["FAQ", "Shipping", "Returns", "Contact"],
  };

  return (
    <footer className="relative py-16 px-6 border-t border-border/20">
      <div className="texture-overlay" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-terra-clay via-terra-sand to-terra-sage p-[1px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="font-display text-lg text-foreground">Unique Yoga Mats</span>
            </div>
            <p className="text-sm text-muted-foreground/60 font-body font-light mb-6 leading-relaxed max-w-xs">
              Custom yoga mats designed by you, crafted with premium materials.
            </p>
            
            <a
              href="#"
              aria-label="Instagram"
              className="inline-block text-muted-foreground/40 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-foreground/60 mb-4 font-body">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors font-body font-light"
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
        <div className="pt-8 border-t border-border/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/40 font-body">
          <p>© 2024 Unique Yoga Mats</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;