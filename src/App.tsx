import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LicenceCard from "./pages/LicenceCard";
import QRCodePage from "./pages/QRCodePage";
import Documents from "./pages/Documents";
import Vehicles from "./pages/Vehicles";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import PersonalInformation from "./pages/settings/PersonalInformation";
import Security from "./pages/settings/Security";
import NotificationPreferences from "./pages/settings/NotificationPreferences";
import Language from "./pages/settings/Language";
import HelpFAQ from "./pages/settings/HelpFAQ";
import ReportProblem from "./pages/settings/ReportProblem";
import PrivacyPolicy from "./pages/settings/PrivacyPolicy";
import TermsOfService from "./pages/settings/TermsOfService";
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/licence-card" element={<LicenceCard />} />
          <Route path="/qr-code" element={<QRCodePage />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/personal-information" element={<PersonalInformation />} />
          <Route path="/settings/security" element={<Security />} />
          <Route path="/settings/notifications" element={<NotificationPreferences />} />
          <Route path="/settings/language" element={<Language />} />
          <Route path="/settings/help" element={<HelpFAQ />} />
          <Route path="/settings/report" element={<ReportProblem />} />
          <Route path="/settings/privacy" element={<PrivacyPolicy />} />
          <Route path="/settings/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
