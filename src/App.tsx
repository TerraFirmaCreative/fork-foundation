import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import LocaleRedirect from "./components/LocaleRedirect";
import LocaleLayout from "./components/LocaleLayout";
import { useCartSync } from "./hooks/useCartSync";

// Route-based code splitting — each non-home page ships its own chunk
const About = lazy(() => import("./pages/About"));
const FAQs = lazy(() => import("./pages/FAQs"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const Shipping = lazy(() => import("./pages/Shipping"));
const SubscribeThankYou = lazy(() => import("./pages/SubscribeThankYou"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostHudson = lazy(() => import("./pages/BlogPost-Hudson"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return null;
};

const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Locale-prefixed routes */}
            <Route path="/:locale" element={<LocaleLayout />}>
              <Route index element={<Index />} />
              <Route path="product/:handle" element={<ProductDetail />} />
              <Route path="about" element={<About />} />
              <Route path="faqs" element={<FAQs />} />
              <Route path="terms" element={<TermsAndConditions />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="contact" element={<Contact />} />
              <Route path="shipping" element={<Shipping />} />
              <Route path="subscribe/thank-you" element={<SubscribeThankYou />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/hudson-in-margaret-river" element={<BlogPostHudson />} />
            </Route>

            {/* Bare paths → detect locale and redirect */}
            <Route path="/" element={<LocaleRedirect />} />
            <Route path="/product/:handle" element={<LocaleRedirect />} />
            <Route path="/about" element={<LocaleRedirect />} />
            <Route path="/faqs" element={<LocaleRedirect />} />
            <Route path="/terms" element={<LocaleRedirect />} />
            <Route path="/refund-policy" element={<LocaleRedirect />} />
            <Route path="/privacy-policy" element={<LocaleRedirect />} />
            <Route path="/contact" element={<LocaleRedirect />} />
            <Route path="/shipping" element={<LocaleRedirect />} />
            <Route path="/subscribe/thank-you" element={<LocaleRedirect />} />
            <Route path="/blog" element={<LocaleRedirect />} />
            <Route path="/blog/hudson-in-margaret-river" element={<LocaleRedirect />} />

            {/* Unsubscribe page (not locale-prefixed — linked from emails) */}
            <Route path="/unsubscribe" element={<Unsubscribe />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
