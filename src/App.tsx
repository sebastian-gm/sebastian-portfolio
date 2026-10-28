import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreditRiskAIPlatform from "./pages/projects/CreditRiskAIPlatform";
import NetworkSecurityPhishing from "./pages/projects/NetworkSecurityPhishing";
import OlistCommerce from "./pages/projects/OlistCommerce";
import Aclara from "./pages/projects/Aclara";
import RouteMetadata from "./components/RouteMetadata";
export default function App() {
  return (
    <BrowserRouter>
      <RouteMetadata />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/aclara" element={<Aclara />} />
        <Route
          path="/projects/credit-risk-ai-platform"
          element={<CreditRiskAIPlatform />}
        />
        <Route
          path="/projects/networksecurity-phishing"
          element={<NetworkSecurityPhishing />}
        />
        <Route path="/projects/olist-commerce" element={<OlistCommerce />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
