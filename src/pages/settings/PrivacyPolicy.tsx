import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Privacy Policy</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border p-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-foreground font-semibold text-base">DriveID Privacy Policy</h2>
          <p className="text-xs text-muted-foreground">Last updated: March 2026</p>

          <h3 className="text-foreground font-semibold">1. Information We Collect</h3>
          <p>We collect personal information you provide when creating an account, including your full name, email address, phone number, South African ID number, and uploaded documents such as driver's licences and identity documents.</p>

          <h3 className="text-foreground font-semibold">2. How We Use Your Information</h3>
          <p>Your information is used to provide digital document management services, verify your identity, send notifications about document expiry, and improve our services. We do not sell your personal data to third parties.</p>

          <h3 className="text-foreground font-semibold">3. POPIA Compliance</h3>
          <p>DriveID complies with the Protection of Personal Information Act (POPIA) of South Africa. We process your personal information lawfully, collect only what is necessary, and ensure your data is kept secure and accurate.</p>

          <h3 className="text-foreground font-semibold">4. Data Storage & Security</h3>
          <p>All data is encrypted in transit using TLS and at rest using AES-256 encryption. Access to your data is restricted to authorised personnel only. We implement industry-standard security measures to protect against unauthorised access.</p>

          <h3 className="text-foreground font-semibold">5. Your Rights</h3>
          <p>Under POPIA, you have the right to access, correct, or delete your personal information. You may request a copy of your data or ask for its deletion by contacting our support team.</p>

          <h3 className="text-foreground font-semibold">6. Data Retention</h3>
          <p>We retain your personal information for as long as your account is active. Upon account deletion, your data will be permanently removed within 30 days.</p>

          <h3 className="text-foreground font-semibold">7. Contact Us</h3>
          <p>For privacy-related enquiries, contact us at privacy@driveid.co.za or use the "Report a Problem" feature in the app.</p>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
