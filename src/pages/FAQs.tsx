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
    question: "What is Unique Yoga Mats?",
    answer: "We're an online store selling beautifully designed yoga mats, printed to order and delivered straight to your door."
  },
  {
    question: "What products do you sell?",
    answer: "Right now, yoga mats — and we're proud of every single one. Each mat features one of our original designs, printed edge-to-edge. We plan to expand over time, but for now we're focused on getting the mats absolutely right."
  },
  {
    question: "How are the designs created?",
    answer: "Phil designs every mat, using AI to bring each one to life."
  },
  {
    question: "Are the mats made to order?",
    answer: "Yes — every mat is printed specifically for you once you place your order. No excess stock, no waste, and nothing sitting in a warehouse. Every mat is made fresh, just for you."
  },
  {
    question: "What are the mats made from?",
    answer: "The top layer is a soft microfibre suede that gets grippier as you warm up — exactly when you need it most. The base is natural rubber, which keeps the mat firmly in place while you move. At 3mm thick, they're light enough to carry easily but supportive enough for daily practice."
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
    answer: "We ship worldwide and are continuously expanding our delivery options. Any questions? Get in touch at hello@uniqueyogamats.com."
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
    answer: "Drop us a message at hello@uniqueyogamats.com and we'll look into it straight away."
  },
  {
    question: "What is your returns policy?",
    answer: "Because every mat is printed to order, we can't accept returns for change of mind. But if your mat arrives damaged or there's an issue with your order, please contact us within 30 days of delivery and we'll make it right."
  },
  {
    question: "Will the colours look exactly like they do on screen?",
    answer: "We do our best, but slight variations can occur due to screen settings and the printing process. This is normal and doesn't affect the quality of your mat."
  },
  {
    question: "How do I get in touch?",
    answer: "You can reach us at hello@uniqueyogamats.com. We're a small team so we might not always reply instantly, but we do reply — and we're always happy to hear from you."
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
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
                  {faq.answer}
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
