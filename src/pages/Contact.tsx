import { useState } from "react";
import { z } from "zod";
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
      await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-confirmation",
            recipientEmail: result.data.email,
            idempotencyKey: `contact-confirm-${id}`,
            templateData: { name: result.data.name, message: result.data.message },
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-notification",
            recipientEmail: "hello@cosmicigloo.com",
            idempotencyKey: `contact-notify-${id}`,
            templateData: {
              name: result.data.name,
              email: result.data.email,
              message: result.data.message,
              submittedAt,
            },
          },
        }),
      ]);

      toast({
        title: "Message sent",
        description: "Thanks — we've sent a confirmation to your inbox and will reply within 1–2 business days.",
      });
      setForm({ name: "", email: "", message: "" });
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
              If you have a question about your order, our products, or anything else, drop us a line below or email us directly at{" "}
              <a
                href="mailto:hello@cosmicigloo.com"
                className="text-foreground font-medium hover:text-shaman-violet transition-colors"
              >
                hello@cosmicigloo.com
              </a>
              .
            </p>
          </div>

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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
