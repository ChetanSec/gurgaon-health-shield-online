
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductFeatures from "./pages/ProductFeatures";
import Insurers from "./pages/Insurers";
import ClaimProcess from "./pages/ClaimProcess";
import Quotation from "./pages/Quotation";
import Technology from "./pages/Technology";
import Dashboard from "./pages/technology/Dashboard";
import EClaims from "./pages/technology/EClaims";
import Service from "./pages/Service";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product-features" element={<ProductFeatures />} />
          <Route path="/insurers" element={<Insurers />} />
          <Route path="/claim-process" element={<ClaimProcess />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/dashboard" element={<Dashboard />} />
          <Route path="/technology/e-claims" element={<EClaims />} />
          <Route path="/service" element={<Service />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
