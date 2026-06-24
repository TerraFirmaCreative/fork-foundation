import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Cosmic Igloo?",
    answer: "We're an online store selling beautifully designed yoga mats, printed to order and delivered straight to your door."
  },
  {
    question: "What products do you sell?",
    answer: "Right now, yoga mats. We plan to expand over time, but for now we're focused on our first love!"
  },
  {
    question: "How are the designs created?",
    answer: "Our designs are developed through a blend of creative direction and digital design tools, allowing us to produce distinctive, detailed artwork that translates beautifully onto our mats."
  },
  {
    question: "Are the mats made to order?",
    answer: "Yes. Every mat is printed specifically for you once you place your order. No excess stock, no waste, and nothing sitting in a warehouse. Every mat is made fresh, just for you."
  },
  {
    question: "What are the mats made from?",
    answer: "The top layer is a soft suede and the base is natural rubber."
  },
  {
    question: "What payment methods do you accept?",
    answer: "All major credit and debit cards, processed securely at checkout."
  },
  {
    question: "When will my order be made?",
    answer: "Production starts shortly after your payment is confirmed. As each mat is printed to order, please allow a little time for this before it ships."
  },
  {
    question: "Where do you ship?",
    answer: "We ship worldwide and are continuously expanding our delivery options. Any questions? Get in touch at hello@cosmicigloo.com."
  },
  {
    question: "How much does shipping cost?",
    answer: "Shipping is free on all orders."
  },
  {
    question: "How long does delivery take?",
    answer: "Orders typically ship within 3 business days. Once your order is on its way, we'll send you tracking details so you can follow it to your door."
  },
  {
    question: "Can I change my shipping address?",
    answer: "If you need to update your address, please get in touch as soon as possible after ordering. Once production or shipping has started, we may not be able to make changes."
  },
  {
    question: "My order hasn't arrived — what should I do?",
    answer: "Send us a message at hello@cosmicigloo.com and we'll look into it straight away."
  },
  {
    question: "What is your returns policy?",
    answer: "Because every mat is printed to order, we can't accept returns for change of mind. But if your mat arrives damaged or there's an issue with your order, please contact us within 30 days of delivery and we'll make it right."
  },
  {
    question: "Will the colors look exactly like they do on screen?",
    answer: "We do our best, but slight variations can occur due to screen settings and the printing process. This is normal and doesn't affect the quality of your mat."
  },
  {
    question: "How do I get in touch?",
    answer: "You can reach us at hello@cosmicigloo.com. We're a small team so we might not always reply instantly. But we do reply, and we're always happy to hear from you."
  }
];

const FAQs = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="FAQs — Cosmic Igloo Yoga Mats"
        description="Answers about our made-to-order yoga mats: materials, sizing, production time, shipping, returns, and care."
        path="/faqs"
        jsonLd={faqJsonLd}
      />
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Frequently Asked Questions
          </h1>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="font-body text-left text-foreground hover:no-underline hover:text-foreground/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground whitespace-pre-line">
                  {faq.answer.split("hello@cosmicigloo.com").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">
                          hello@cosmicigloo.com
                        </a>
                      )}
                    </span>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
