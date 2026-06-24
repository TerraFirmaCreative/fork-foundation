import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Status = "validating" | "ready" | "already" | "invalid" | "submitting" | "done" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<Status>("validating");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } },
        );
        const data = await res.json();
        if (res.ok && data.valid) setStatus("ready");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("error");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setStatus("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) setStatus("error");
    else if (data?.success) setStatus("done");
    else if (data?.reason === "already_unsubscribed") setStatus("already");
    else setStatus("error");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative py-24 px-6">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Email preferences
          </h1>
          {status === "validating" && (
            <p className="text-muted-foreground">Checking your link…</p>
          )}
          {status === "ready" && (
            <>
              <p className="text-muted-foreground font-body leading-relaxed">
                Click below to unsubscribe from Cosmic Igloo emails. You'll stop receiving messages
                from us at this address.
              </p>
              <Button variant="hero" size="lg" onClick={handleConfirm}>
                Confirm unsubscribe
              </Button>
            </>
          )}
          {status === "submitting" && <p className="text-muted-foreground">Processing…</p>}
          {status === "done" && (
            <p className="text-muted-foreground font-body">
              You've been unsubscribed. Sorry to see you go — you can resubscribe anytime from our site.
            </p>
          )}
          {status === "already" && (
            <p className="text-muted-foreground font-body">
              This email address is already unsubscribed. No further action needed.
            </p>
          )}
          {status === "invalid" && (
            <p className="text-muted-foreground font-body">
              This unsubscribe link is invalid or has expired.
            </p>
          )}
          {status === "error" && (
            <p className="text-muted-foreground font-body">
              Something went wrong. Please try again or email <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a>.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
