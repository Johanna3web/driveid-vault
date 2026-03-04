import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I upload a new document?", a: "Go to the Documents page and tap the '+' button or the upload prompt. Select the document type, enter details, and submit." },
  { q: "How long does document verification take?", a: "Verification typically takes 2–3 business days. You'll receive a notification once your document has been verified." },
  { q: "What happens when my licence expires?", a: "You'll receive a notification 30 days before expiry. You can upload a renewed licence at any time through the Documents section." },
  { q: "How do I share my digital licence?", a: "Open your Digital Card page and tap the QR code icon. Officials can scan it to verify your credentials." },
  { q: "Is my data safe?", a: "Yes. All data is encrypted in transit and at rest. We comply with POPIA and GDPR regulations to protect your personal information." },
  { q: "Can I use this app as my official licence?", a: "DriveID serves as a digital companion. Always carry your physical licence as required by South African law." },
  { q: "How do I delete my account?", a: "Contact support through the 'Report a Problem' section and request account deletion. We'll process it within 7 business days." },
];

const HelpFAQ = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Help & FAQ</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-4">
                <AccordionTrigger className="text-sm font-medium text-foreground text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default HelpFAQ;
