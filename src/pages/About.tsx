import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-medium mb-8 text-foreground">
            Our Story
          </h1>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Hi. We're Charly, Phil and Tym, three friends who started Unique Yoga Mats because we believe yoga mats should be genuinely beautiful.
            </p>
            <p>
              We wanted to create mats that carry original artwork, designs you'd want to leave out.
            </p>
            <p>
              Between us we cover the creative, the technical, and everything in between. Every design in our collection is an original piece of artwork, created to bring a little more beauty and inspiration to your practice.
            </p>
            <p>
              But looks aren't everything, of course. Our mats have a soft suede surface on top that gets grippier as you warm up, a natural rubber base that stays put, and printed edge to edge so the artwork looks exactly as it should. At 3mm thick, they're light enough to carry easily but supportive enough for daily practice.
            </p>
            <p>
              We want to make mats we're proud of. Mats that hopefully you won't want to put away!
            </p>
            <p>
              What we envisage is a growing community of people who love our beautiful yoga mats. Hearing where you practice, seeing your mat wherever you are. That means a lot to us. It's early days, but that's where we're headed.
            </p>
            <p>
              Come and be a part of it.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
