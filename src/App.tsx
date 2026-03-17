import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import SubscribeThankYou from "./pages/SubscribeThankYou";
import Blog from "./pages/Blog";
import BlogPostHudson from "./pages/BlogPost-Hudson";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Sitemap from "./pages/Sitemap";
import ScrollToTop from "./components/ScrollToTop";
import LocaleRedirect from "./components/LocaleRedirect";
import LocaleLayout from "./components/LocaleLayout";
import { useCartSync } from "./hooks/useCartSync";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <ScrollToTop />
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

          <Route path="/sitemap.xml" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
