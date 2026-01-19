import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    review: "The quality is incredible—perfect grip for hot yoga. And it actually looks like art.",
  },
  {
    id: 2,
    name: "David C.",
    review: "As a yoga instructor, I wanted something unique for my studio. This exceeded expectations.",
  },
  {
    id: 3,
    name: "Emma J.",
    review: "It's like they pulled the design straight from my imagination. Best mat I've ever owned.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 terra-bg" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            What practitioners say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-lg bg-card/30 border border-border/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-terra-sand/60 text-terra-sand/60" />
                ))}
              </div>
              
              <p className="font-display text-base text-foreground/85 italic leading-relaxed mb-6">
                "{review.review}"
              </p>
              
              <p className="text-sm text-muted-foreground font-body">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;