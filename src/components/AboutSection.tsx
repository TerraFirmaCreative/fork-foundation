import { MandalaDecoration } from "./SacredGeometry";
import LocaleLink from "./LocaleLink";

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry decoration */}
      <MandalaDecoration className="-top-48 -left-48" size={500} />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-72 h-72 -bottom-36 right-1/4 bg-shaman-ember/08"
        style={{ animationDelay: "5s" }}
      />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
          Our Story
        </p>
        
        <h2 className="font-display text-3xl md:text-5xl font-medium mb-10 tracking-tight leading-tight">
<span className="text-foreground">Three friends. </span><span className="text-gradient italic">One shared idea.</span>
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            Hi, we're Charly, Phil and Tym — the small team behind Ensori.
          </p>

          <p>
            Phil started designing beautiful yoga mats using AI a few years back. 
            When we saw what he was creating, we wanted to be part of it.
          </p>

          <p>
            Phil is the creative heart of everything — he designs every mat, working 
            with AI to produce artwork you genuinely won't find anywhere else. Tym is 
            the technical brain who makes it all actually work. And I'm Charly — I 
            handle everything in between and make sure your mat arrives at your door.
          </p>

          <p>
            We'd love you to join our little community.{" "}
            <LocaleLink 
              to="/about" 
              className="text-shaman-gold hover:text-shaman-gold/80 underline underline-offset-4 transition-colors"
            >
              Read our full story →
            </LocaleLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;