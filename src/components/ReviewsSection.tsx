import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Los Angeles, CA",
    rating: 5,
    review: "I described a sunset over mountains with lotus flowers, and the AI created exactly what I envisioned! The mat quality is incredible - perfect grip and so comfortable.",
    avatar: "SM",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Vancouver, BC",
    rating: 5,
    review: "As a yoga instructor, I've tried dozens of mats. This is the first time I've had one that's truly mine. The cosmic mandala design I created gets compliments every class!",
    avatar: "DC",
  },
  {
    id: 3,
    name: "Emma Johansson",
    location: "Stockholm, Sweden",
    rating: 5,
    review: "The whole process took less than 5 minutes! I typed 'northern lights dancing over a forest' and got the most beautiful mat I've ever owned. Shipping to Europe was fast too.",
    avatar: "EJ",
  },
  {
    id: 4,
    name: "Marcus Williams",
    location: "London, UK",
    rating: 5,
    review: "I was skeptical about AI-generated designs, but wow! Created a psychedelic peacock pattern that looks like professional artwork. Worth every penny.",
    avatar: "MW",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 px-6 hero-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Yogis Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who've transformed their practice with personalized mats
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="card-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold shrink-0">
                  {review.avatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-medium">4.9/5 from 2,400+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
