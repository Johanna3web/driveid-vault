import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Terms of Service</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border p-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-foreground font-semibold text-base">DriveID Terms of Service</h2>
          <p className="text-xs text-muted-foreground">Effective: March 2026</p>

          <h3 className="text-foreground font-semibold">1. Acceptance of Terms</h3>
          <p>By using DriveID, you agree to these Terms of Service. If you do not agree, please discontinue use of the application immediately.</p>

          <h3 className="text-foreground font-semibold">2. Service Description</h3>
          <p>DriveID provides a digital platform for managing and viewing South African driving licences, identity documents, and related vehicle documentation. The app serves as a digital companion and does not replace physical documents required by law.</p>

          <h3 className="text-foreground font-semibold">3. User Responsibilities</h3>
          <p>You are responsible for maintaining the confidentiality of your account credentials, ensuring all uploaded documents are authentic and belong to you, and keeping your physical documents as required by South African traffic law.</p>

          <h3 className="text-foreground font-semibold">4. Acceptable Use</h3>
          <p>You agree not to use DriveID for fraudulent purposes, upload falsified or tampered documents, attempt to access other users' accounts, or reverse-engineer or modify the application.</p>

          <h3 className="text-foreground font-semibold">5. Disclaimer</h3>
          <p>DriveID is provided "as is" without warranties. We are not liable for any damages arising from the use of the app, including but not limited to fines or penalties for not carrying physical documentation.</p>

          <h3 className="text-foreground font-semibold">6. Termination</h3>
          <p>We reserve the right to suspend or terminate your account if you violate these terms. You may also delete your account at any time through the app settings.</p>

          <h3 className="text-foreground font-semibold">7. Governing Law</h3>
          <p>These terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in the courts of South Africa.</p>

          <h3 className="text-foreground font-semibold">8. Changes to Terms</h3>
          <p>We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the revised terms.</p>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default TermsOfService;
