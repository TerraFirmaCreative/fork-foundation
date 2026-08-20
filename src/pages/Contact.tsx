import { useState } from "react";

import { z } from "zod";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const id = crypto.randomUUID();

      // 1. Persist submission (so we have a record even if email fails)
      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert({ id, name: result.data.name, email: result.data.email, message: result.data.message });
      if (insertError) throw insertError;

      const submittedAt = new Date().toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "UTC",
      }) + " UTC";

      // 2. Send confirmation to the visitor + notification to hello@cosmicigloo.com
      // Recipients are re-resolved server-side from the contact_submissions row
      // (referenced by submissionId) to prevent abuse — values passed here are
      // hints only and may be overridden by the edge function.
      await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-confirmation",
            recipientEmail: result.data.email,
            idempotencyKey: `contact-confirm-${id}`,
            templateData: { submissionId: id },
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-notification",
            recipientEmail: "hello@cosmicigloo.com",
            idempotencyKey: `contact-notify-${id}`,
            templateData: { submissionId: id },
          },
        }),
      ]);


      setForm({ name: "", email: "", message: "" });
      setSent(true);
      setTimeout(() => {
        document.getElementById("contact-sent")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    } catch (err) {
      toast({
        title: "Couldn't send your message",
        description: "Please try again or email hello@cosmicigloo.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Cosmic Igloo — We're Here to Help"
        description="Question about your order or our yoga mats? Send us a message or email hello@cosmicigloo.com — we reply within 1 business day."
        path="/contact"
      />
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Contact
          </h1>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p className="text-lg">
              Got a question, need help with an order, or just want to say hi? We'd love to hear from you.
            </p>
            <p>
              The best way to reach us is{" "}
              <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">
                hello@cosmicigloo.com
              </a>
              , or use the form below.
            </p>
            <p>
              We're a small team, so we might not reply instantly, but we do reply, and we're always happy to hear from you.
            </p>
            <p className="text-foreground font-medium">A few practical details, just in case:</p>
            <ul className="space-y-2">
              {[
                "We're based in Perth, Australia, with team members also in the UK",
                "We work Monday to Friday",
                "We're online only, so email or the form is the best way to reach us",
                "Your mats are printed and shipped from our production partner in the US",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-shaman-gold pt-2">
              Want to become an affiliate?
            </h2>
            <p>
              If you love Cosmic Igloo and want to share it with your community, we'd love to work with you. Send us your details and a bit about yourself at{" "}
              <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">
                hello@cosmicigloo.com
              </a>
              , and we'll be in touch.
            </p>
            
          </div>


          {sent && (
            <div
              id="contact-sent"
              role="status"
              aria-live="polite"
              className="mt-10 rounded-xl border-2 border-shaman-gold bg-shaman-gold/10 p-8 text-center"
            >
              <h2 className="font-display text-2xl md:text-3xl font-medium text-shaman-gold mb-3">
                Message sent
              </h2>
              <p className="font-body text-foreground/90 max-w-md mx-auto">
                Thanks — we've sent a confirmation to your inbox. If you don't see it, check your spam folder.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-6"
                onClick={() => setSent(false)}
              >
                Send another message
              </Button>
            </div>
          )}

          {!sent && (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-foreground">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                placeholder="Your name"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-body text-foreground">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={6}
                placeholder="How can we help?"
                aria-invalid={!!errors.message}
              />
              <div className="flex justify-between items-center">
                {errors.message ? (
                  <p className="text-sm text-destructive">{errors.message}</p>
                ) : <span />}
                <span className="text-xs text-muted-foreground">{form.message.length}/1000</span>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Sending…" : "Let's connect"}
            </Button>
          </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
