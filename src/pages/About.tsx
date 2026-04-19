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

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Unique Yoga Mats began because we believed yoga mats should be genuinely beautiful.
            </p>
            <p>
              Every design in our collection is an original piece of artwork, created to bring beauty and inspiration to your practice.
            </p>
            <p>
              Our mats are made to go everywhere with you — a soft suede surface that gets grippier as you warm up, a natural rubber base that stays put, thin enough to carry and supportive enough for daily practice.
            </p>
            <p>
              We're building a community of people who love our beautiful yoga mats. We'd love to hear about your practice and see your mat, wherever that may be — just say hello.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
