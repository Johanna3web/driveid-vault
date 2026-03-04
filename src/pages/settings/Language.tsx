import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { useToast } from "@/hooks/use-toast";

const languages = [
  { code: "en", label: "English" },
  { code: "af", label: "Afrikaans" },
  { code: "zu", label: "isiZulu" },
  { code: "xh", label: "isiXhosa" },
  { code: "st", label: "Sesotho" },
  { code: "tn", label: "Setswana" },
  { code: "ts", label: "Xitsonga" },
  { code: "ve", label: "Tshivenda" },
  { code: "nr", label: "isiNdebele" },
  { code: "ss", label: "siSwati" },
  { code: "nso", label: "Sepedi" },
];

const Language = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selected, setSelected] = useState("en");

  const handleSelect = (code: string, label: string) => {
    setSelected(code);
    toast({ title: `Language set to ${label}` });
  };

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Language</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
          {languages.map(lang => (
            <button key={lang.code} onClick={() => handleSelect(lang.code, lang.label)} className="w-full flex items-center justify-between p-4 text-left">
              <p className="text-sm font-medium text-foreground">{lang.label}</p>
              {selected === lang.code && <Check size={16} className="text-accent" />}
            </button>
          ))}
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Language;
