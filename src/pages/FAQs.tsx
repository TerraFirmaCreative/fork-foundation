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
    question: "What is Terra Firma Collective?",
    answer: "Terra Firma Collective is an online store offering beautifully designed yoga mats, printed to order and delivered directly to your door. Each design is carefully created and produced specifically for you."
  },
  {
    question: "What products do you sell?",
    answer: "We currently specialize in premium yoga mats featuring our own original designs. Each mat is printed edge-to-edge using one of our artworks. We plan to expand our product range over time."
  },
  {
    question: "How are the designs created?",
    answer: "Our designs are developed through a blend of creative direction and digital design tools, allowing us to produce distinctive, detailed artwork that translates beautifully onto our mats."
  },
  {
    question: "Are the mats made to order?",
    answer: "Yes. All of our mats are printed to order once you place your purchase. This approach helps reduce waste and ensures each mat is made specifically for you."
  },
  {
    question: "What are your mats made from?",
    answer: "Our yoga mats feature a soft microfiber suede top layer, providing a smooth, comfortable feel and reliable grip — especially during warm or sweaty practices.\n\nThe base is made from natural rubber, helping keep the mat securely in place while you move.\n\nTogether, these materials offer a balance of comfort, durability, and performance suitable for a wide range of yoga styles."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept secure online payments at checkout, including major credit and debit cards. All payments are processed safely through our payment provider."
  },
  {
    question: "When will my order be made?",
    answer: "Production begins shortly after your payment is confirmed. As each mat is printed to order, production times may vary slightly."
  },
  {
    question: "Where do you ship?",
    answer: "We ship worldwide and are continuously expanding our delivery options. Any questions? Get in touch"
  },
  {
    question: "Will I need to pay any additional taxes or fees on delivery?",
    answer: "Most orders arrive with no additional charges, though some countries may apply local import taxes depending on order value and local regulations. If you're unsure, check with your local customs office before ordering."
  },
  {
    question: "How much does shipping cost?",
    answer: "We offer free worldwide shipping on all orders."
  },
  {
    question: "How long does delivery take?",
    answer: "Orders typically ship within 3 business days. Delivery times vary depending on your location. Once your order has shipped, you'll receive tracking details where available."
  },
  {
    question: "Can I change my shipping address?",
    answer: "If you need to update your shipping address, please contact us as soon as possible after placing your order. Once production or shipping has started, changes may not be possible."
  },
  {
    question: "My order hasn't arrived — what should I do?",
    answer: "If your order hasn't arrived within the expected timeframe, please contact us at hello@uniqueyogamats.com and we'll be happy to investigate and resolve the issue."
  },
  {
    question: "What is your returns policy?",
    answer: "If your mat arrives damaged, faulty, or there's an issue with your order, please contact us at hello@uniqueyogamats.com within 30 days of delivery and we'll work with you to make it right."
  },
  {
    question: "Will the colors look exactly the same as on my screen?",
    answer: "We do our best to represent colors accurately, but slight variations may occur due to screen settings and the printing process. These subtle differences are a normal part of production."
  },
  {
    question: "How do I contact Unique Yoga Mats?",
    answer: "You can reach us at hello@uniqueyogamats.com and we'll aim to get back to you as quickly as possible."
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
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
