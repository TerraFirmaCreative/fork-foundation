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
              We're Phil, Charly and Tym — three friends building Terra Firma Collective from Australia, the UK and Poland.
            </p>
            
            <p>
              What started as a simple idea turned into something much bigger. We wanted to create yoga mats that carry original artwork — pieces you'd genuinely want to live with, not just roll out and pack away.
            </p>

            <p>
              Because we believe your space matters.
            </p>

            <p>
              Wellness doesn't have to be complicated. It can start with one stretch. One breath. One quiet moment in the morning before the day begins. And when your mat feels personal — when it reflects something you connect with — it's easier to come back to it.
            </p>

            <p>
              That's really where this began.
            </p>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Built Across Borders
              </h2>
              <p className="mb-4">
                We work across three time zones (which makes scheduling interesting), but it also means every mat is shaped by different perspectives.
              </p>
              <p className="mb-4">
                Phil brings the vision and creative direction from the Australian coast.
                <br />Charly keeps everything moving from the UK — structure, detail, making sure ideas become real things.
                <br />Tym brings the technical brain and bold creative energy from Poland, building and refining everything behind the scenes.
              </p>
              <p className="mb-4">
                We challenge each other. We refine things. We care about getting it right.
              </p>
              <p>
                Every design is original. Every mat is printed edge-to-edge and made to order. Nothing mass-produced. Nothing rushed.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                The Mats Themselves
              </h2>
              <p className="mb-4">
                They had to feel as good as they look.
              </p>
              <p className="mb-4">
                The top layer is a soft microfiber suede that gets grippier as you move and warm up — especially during sweaty sessions. The more you practice, the better it performs.
              </p>
              <p className="mb-4">
                The base is natural rubber, giving you cushioning and stability without sliding around the floor.
              </p>
              <p className="mb-4">
                At 3mm thick, they're lightweight enough to carry easily, but supportive enough for everyday practice. Sized at 70" × 26", there's plenty of room to move, stretch and flow freely.
              </p>
              <p>
                Simple. Functional. Built to last.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Why We're Doing This
              </h2>
              <p className="mb-4">
                We're not trying to build the biggest yoga brand in the world.
              </p>
              <p className="mb-4">
                We just want to create something thoughtful. Something artistic. Something that makes you want to roll your mat out again tomorrow.
              </p>
              <p>
                If one of our designs makes your space feel more like yours — and brings you back to your practice more often — then we've done our job.
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
