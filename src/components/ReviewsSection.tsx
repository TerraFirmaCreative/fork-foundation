import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Los Angeles, CA",
    rating: 5,
    review: "I described a sunset over mountains with lotus flowers, and the AI created exactly what I envisioned! The mat quality is incredible - perfect grip and so comfortable.",
    avatar: "SM",
    gradientFrom: "from-psychedelic-purple",
    gradientTo: "to-psychedelic-pink",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Vancouver, BC",
    rating: 5,
    review: "As a yoga instructor, I've tried dozens of mats. This is the first time I've had one that's truly mine. The cosmic mandala design I created gets compliments every class!",
    avatar: "DC",
    gradientFrom: "from-psychedelic-pink",
    gradientTo: "to-psychedelic-cyan",
  },
  {
    id: 3,
    name: "Emma Johansson",
    location: "Stockholm, Sweden",
    rating: 5,
    review: "The whole process took less than 5 minutes! I typed 'northern lights dancing over a forest' and got the most beautiful mat I've ever owned. Shipping to Europe was fast too.",
    avatar: "EJ",
    gradientFrom: "from-psychedelic-cyan",
    gradientTo: "to-psychedelic-teal",
  },
  {
    id: 4,
    name: "Marcus Williams",
    location: "London, UK",
    rating: 5,
    review: "I was skeptical about AI-generated designs, but wow! Created a psychedelic peacock pattern that looks like professional artwork. Worth every penny.",
    avatar: "MW",
    gradientFrom: "from-psychedelic-teal",
    gradientTo: "to-psychedelic-gold",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Floating orbs */}
      <div 
        className="floating-orb w-72 h-72 -top-36 right-1/4 bg-psychedelic-pink/15"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="floating-orb w-56 h-56 bottom-0 -left-28 bg-psychedelic-purple/10"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-psychedelic-pink bg-psychedelic-pink/10 rounded-full border border-psychedelic-pink/30">
            💜 Customer Love
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Loved by Yogis</span>
            <br />
            <span className="text-foreground">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who've transformed their practice with personalized mats
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with gradient border on hover */}
              <div className="relative p-6 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-transparent hover:bg-card/80">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${review.gradientFrom} ${review.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />
                <div className="absolute inset-[1px] rounded-3xl bg-card/95 -z-10" />
                
                {/* Quote icon */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${review.gradientFrom} ${review.gradientTo} flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1`}>
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex items-start gap-4">
                  {/* Avatar with gradient ring */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${review.gradientFrom} ${review.gradientTo} p-[2px] shrink-0 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-foreground font-bold">
                      {review.avatar}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-psychedelic-gold text-psychedelic-gold" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 text-sm leading-relaxed italic">
                      "{review.review}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Rating summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-card/60 backdrop-blur-sm border border-border/50">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-psychedelic-gold text-psychedelic-gold" />
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <span className="font-display text-xl font-bold text-gradient">4.9/5</span>
            <span className="text-muted-foreground">from 2,400+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;