import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleLink from "@/components/LocaleLink";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
            Our Story
          </h1>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground italic">A warm space in the infinite.</p>
            <p>
              That's what we believe our mats should be, a place of beauty and intention amongst the chaos.
            </p>
            <p>
              Cosmic Igloo was born from a simple belief: that the one thing we stare at for an entire practice should be genuinely, arrestingly beautiful. Beautiful enough to actually move you.
            </p>
            <p>
              Every design in our collection is an original work of art, created to carry meaning, provoke feeling and elevate our practice.
            </p>
            <p>
              Our mats are built to go everywhere we go. A suede microfibre surface that gets grippier as we warm up. A natural rubber base that stays put. 3mm of balanced thickness, supportive enough for daily practice, light enough to carry anywhere.
            </p>
            <p className="text-foreground">Made to order. Made for us.</p>
            <p>
              We're building a community of people who want to be inspired every time they unroll their mat. If that's you, <LocaleLink to="/#design-gallery" className="underline underline-offset-4 text-foreground hover:text-primary transition-colors">come find yours</LocaleLink>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
