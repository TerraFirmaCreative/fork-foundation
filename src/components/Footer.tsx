import { Sparkles, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Create a Mat", "Browse Gallery", "Pricing", "Reviews"],
    Company: ["About Us", "Sustainability", "Careers", "Press"],
    Support: ["FAQ", "Contact", "Shipping", "Returns"],
    Legal: ["Privacy", "Terms", "Cookies"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 cosmic-bg opacity-50" />
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-psychedelic-purple via-psychedelic-pink via-psychedelic-cyan to-psychedelic-gold" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-psychedelic-purple via-psychedelic-pink to-psychedelic-cyan p-[2px]">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-psychedelic-gold" />
                </div>
              </div>
              <span className="font-display text-xl font-bold text-gradient">MatFlow</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              AI-powered custom yoga mats, as unique as you.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group inline-block"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MatFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-psychedelic-teal animate-pulse" />
              Eco-Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-psychedelic-gold animate-pulse" />
              Carbon Neutral
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;