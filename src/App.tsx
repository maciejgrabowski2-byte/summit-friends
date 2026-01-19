import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { TranslationProvider } from "@/hooks/useTranslation";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import RoutesPage from "./pages/Routes";
import RouteDetail from "./pages/RouteDetail";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouterRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/routes/:id" element={<RouteDetail />} />
            <Route path="/userprofile" element={<UserProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
