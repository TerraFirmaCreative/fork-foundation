import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
            About Our Mats
          </h1>
          
          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p className="text-lg">
              Our yoga mats combine premium materials with original artwork to create pieces that are both functional and one of a kind.
            </p>
            
            <p>
              Each mat is made to order, ensuring your design is as unique as your practice.
            </p>

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
                Lightweight yet supportive, our mats strike a balance between comfort and portability. At 3mm thick and weighing 62 oz, they're easy to carry while still offering the joint support you need for daily practice.
              </p>
              <p>
                Sized at 70" x 26", each mat gives you plenty of space to move freely, stretch fully, and flow without restriction. Durable construction ensures your mat holds its shape and performance over time, even with regular use.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Edge-to-Edge, One-of-a-Kind Designs
              </h2>
              <p className="mb-4">
                What truly sets our mats apart is the artwork.
              </p>
              <p className="mb-4">
                Each design is developed through a thoughtful creative process, resulting in artwork that exists nowhere else. Whether you're drawn to bold patterns, abstract forms, or calm, nature-inspired visuals, your mat becomes a personal expression of your style and energy.
              </p>
              <p>
                Designs are printed edge-to-edge in vibrant, high-quality colour, ensuring a striking finish that doesn't fade or peel with use. No two mats are ever the same.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Why Choose Our Mats?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Original, considered designs</strong> – Each artwork is created individually and printed edge-to-edge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-magenta mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Superior grip</strong> – Microfiber suede surface that improves with moisture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Natural rubber base</strong> – Supportive, stable, and designed for daily practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Durable & portable</strong> – Lightweight, cushioned, and made to last</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/30">
              <p className="text-lg italic text-foreground/80">
                Step onto a mat that feels as individual as your practice.
              </p>
              <p className="mt-4">
                Our yoga mats are more than just equipment — they're a blend of performance, creativity, and considered design.
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
