import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleLink from "@/components/LocaleLink";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const links = [
    { to: "/#design-gallery", label: "Browse the mats" },
    { to: "/about", label: "Our story" },
    { to: "/faqs", label: "FAQs" },
    { to: "/contact", label: "Contact us" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Page Not Found — Cosmic Igloo"
        description="This page has drifted off into the cosmos. Find your way back to our sacred geometry yoga mats."
        path="/404"
        noindex
      />
      <Header />
      <main className="relative min-h-[70vh] py-24 px-6 overflow-hidden flex items-center justify-center">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />

        {/* Soft halo */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, hsla(270, 70%, 60%, 0.28) 0%, hsla(285, 60%, 50%, 0.12) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-shaman-gold font-body font-light">
            Lost in the infinite
          </p>

          <h1 className="mt-4 font-display font-medium tracking-tight text-5xl md:text-6xl text-gradient leading-tight pb-2">
            404
          </h1>

          <p className="mt-3 text-lg md:text-xl font-display text-foreground">
            This page has drifted off its axis.
          </p>

          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            The page you're looking for doesn't exist — or it moved somewhere
            more beautiful. Here's the way back.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {links.map((l) => (
              <LocaleLink
                key={l.to}
                to={l.to}
                className="inline-flex items-center rounded-full border border-shaman-gold/40 bg-gradient-to-r from-shaman-gold/10 via-shaman-violet/10 to-shaman-gold/10 hover:from-shaman-gold/20 hover:via-shaman-violet/20 hover:to-shaman-gold/20 px-5 py-2.5 text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase text-shaman-gold hover:text-foreground font-body font-light transition-all duration-500"
              >
                {l.label}
              </LocaleLink>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
