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
              We're Charly, Phil, and Tym — three friends based in Australia, the UK, and Poland, building something we believe in from opposite sides of the world.
            </p>
            
            <p>
              The idea was simple: create yoga mats that carry original, meaningful artwork — pieces that make your practice space feel personal and inspiring. But behind that simplicity is a shared philosophy that runs deeper.
            </p>

            <p>
              We believe wellness doesn't need to be complicated. It can start with one stretch, one breath, one moment of showing up for yourself. And the space you practice in matters. A mat that feels like yours — that reflects something you connect with — makes it easier to come back to it, day after day.
            </p>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Built Across Borders
              </h2>
              <p className="mb-4">
                We work across three time zones, bringing together different perspectives, creative backgrounds, and a shared love of art and movement. Charly brings the vision from the Australian coast. Phil brings precision and craft from the UK. Tym brings bold creative energy from Poland.
              </p>
              <p>
                Together, we design every mat with intention — each one printed to order, edge to edge, and made to last.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Premium Materials
              </h2>
              <p className="mb-4">
                Our mats feature a microfiber suede top layer that feels soft and luxurious underfoot while offering excellent grip — especially during sweaty sessions. As your practice warms up, grip improves, helping you stay grounded and focused through every pose.
              </p>
              <p>
                The base is made from natural rubber, providing reliable cushioning and shock absorption while gripping firmly to the floor.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Designed for Practice, Built to Last
              </h2>
              <p className="mb-4">
                Lightweight yet supportive, our mats strike a balance between comfort and portability. At 3 mm thick and weighing 62 oz, they're easy to carry while still offering the joint support you need for daily practice.
              </p>
              <p>
                Sized at 70" × 26", each mat gives you plenty of space to move freely, stretch fully, and flow without restriction. Durable construction ensures your mat holds its shape and performance over time, even with regular use.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Why We Do This
              </h2>
              <p className="mb-4">
                We're not trying to change the world overnight. We just want to inspire people to do a little more — one practice, one morning, one mat at a time. If our designs make your space feel more like yours, and that helps you show up more often, then we've done what we set out to do.
              </p>
            </div>

            <div className="pt-4 border-t border-border/30">
              <p className="text-lg italic text-foreground/80">
                Three friends. Three time zones. One mat at a time.
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
