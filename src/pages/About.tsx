import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
            Our Story
          </h1>
          
          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p className="text-lg">
              Hi. We're Charly, Phil and Tym — three friends now living in the UK, Australia and Poland.
            </p>
            
            <p>
              Unique Yoga Mats started with a simple idea — that yoga mats should be genuinely beautiful. We wanted to create mats that carry original artwork — designs you'd genuinely want to leave out. That's really where this began.
            </p>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                How We Met
              </h2>
              <p className="mb-4">
                I'm Charly. Phil and I worked together in Perth back in 2013, and Phil met Tym a few years later in Fremantle — Tym was travelling, they got talking, and that was that.
              </p>
              <p>
                Fast forward, a lot of WhatsApp messages, and more Google Meets than any of us care to count — Unique Yoga Mats was born, and we're genuinely proud of what we've made.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                What We Each Bring
              </h2>
              <p className="mb-4">
                Phil is the creative heart of everything. Every design starts with him — he works with AI to create each mat, refining until it feels right. Vision, creativity, energy — that's his world. (Just don't ask him to file anything!)
              </p>
              <p className="mb-4">
                Tym is the technical brain. He builds, he solves, he makes the stuff that exists only in Phil's head function in real life.
              </p>
              <p>
                And I'm Charly — I keep everything moving. The structure, the detail, the small things that need doing so that ideas actually turn into mats that arrive at your door.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                The Mats Themselves
              </h2>
              <p className="mb-4">
                Our mats are designed to be beautiful — genuinely, strikingly beautiful. Artwork that means something. Designs that are emotive, original and unlike anything else you'll find on a yoga mat.
              </p>
              <p className="mb-4">
                But they also had to feel as good as they look. Soft microfibre suede on top that gets grippier as you warm up, a natural rubber base that stays put, and printed edge-to-edge so the artwork looks exactly as it should. At 3mm thick, they're light enough to carry easily but supportive enough for daily practice.
              </p>
              <p>
                We were fussy about every detail. Our mats had to earn their place.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Why We're Doing This
              </h2>
              <p className="mb-4">
                We want to make mats we're genuinely proud of — artistic, original, and the kind of thing that makes you want to roll your mat out again tomorrow.
              </p>
              <p className="mb-4">
                What we envisage is a growing community of people who love beautiful yoga mats. Hearing where you practice, seeing your mat wherever you are — that means a lot to us. It's early days, but that's where we're headed.
              </p>
              <p>
                Come and be a part of it.
              </p>
            </div>

            <div className="pt-4 border-t border-border/30">
              <p className="text-lg italic text-foreground/80">
                Three friends. Three countries. One mat at a time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
