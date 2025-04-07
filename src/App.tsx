
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Options from "./pages/Options";
import Jaiib from "./pages/Jaiib";
import Caiib from "./pages/Caiib";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Import JAIIB subject pages
import IndianEconomy from "./pages/jaiib/IndianEconomy";
import PrinciplesBanking from "./pages/jaiib/PrinciplesBanking";
import AccountingFinancial from "./pages/jaiib/AccountingFinancial";
import RetailBanking from "./pages/jaiib/RetailBanking";
import QuizPage from "./pages/jaiib/QuizPage";

// Import CAIIB subject pages
import AdvancedBankManagement from "./pages/caiib/AdvancedBankManagement";
import BankFinancialManagement from "./pages/caiib/BankFinancialManagement";
import AdvancedBusinessFinancial from "./pages/caiib/AdvancedBusinessFinancial";
import BankingRegulations from "./pages/caiib/BankingRegulations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/options" element={<Options />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jaiib" element={<Jaiib />} />
          <Route path="/caiib" element={<Caiib />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* JAIIB Subject Routes */}
          <Route path="/jaiib/indian-economy" element={<IndianEconomy />} />
          <Route path="/jaiib/principles-banking" element={<PrinciplesBanking />} />
          <Route path="/jaiib/accounting-financial" element={<AccountingFinancial />} />
          <Route path="/jaiib/retail-banking" element={<RetailBanking />} />
          <Route path="/jaiib/quiz" element={<QuizPage />} />
          
          {/* CAIIB Subject Routes */}
          <Route path="/caiib/advanced-bank-management" element={<AdvancedBankManagement />} />
          <Route path="/caiib/bank-financial-management" element={<BankFinancialManagement />} />
          <Route path="/caiib/advanced-business-financial" element={<AdvancedBusinessFinancial />} />
          <Route path="/caiib/banking-regulations" element={<BankingRegulations />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
