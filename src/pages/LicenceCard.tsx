import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCw, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { supabase } from "@/integrations/supabase/client";
import mockLicenceFront from "@/assets/mock-licence-front.png";
import mockLicenceBack from "@/assets/mock-licence-back.png";
import mockIdFront from "@/assets/mock-id-front.png";
import mockIdBack from "@/assets/mock-id-back.png";

interface DocImage {
  src: string;
  label: string;
  side: string;
}

const LicenceCard = () => {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState("Loading...");
  const [fullscreenImg, setFullscreenImg] = useState<DocImage | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("profiles").select("full_name").eq("user_id", user.id).single();
      if (data) setProfileName(data.full_name);
    };
    fetchProfile();
  }, []);

  const licenceImages: DocImage[] = [
    { src: mockLicenceFront, label: "Driver's Licence", side: "Front" },
    { src: mockLicenceBack, label: "Driver's Licence", side: "Back" },
  ];

  const idImages: DocImage[] = [
    { src: mockIdFront, label: "Identity Document", side: "Front" },
    { src: mockIdBack, label: "Identity Document", side: "Back" },
  ];

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center"
          >
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-foreground">My Cards</h1>
            <p className="text-xs text-muted-foreground">{profileName}</p>
          </div>
        </motion.div>

        {/* Driver's Licence */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
            Driver's Licence
          </p>
          <div className="grid grid-cols-2 gap-2">
            {licenceImages.map((img) => (
              <motion.div
                key={img.side}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFullscreenImg(img)}
                className="rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer active:ring-2 active:ring-accent"
              >
                <img src={img.src} alt={`Licence ${img.side}`} className="w-full h-auto object-cover" />
                <p className="text-[10px] text-center text-muted-foreground py-1 bg-card">{img.side}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Identity Document */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
            Identity Document
          </p>
          <div className="grid grid-cols-2 gap-2">
            {idImages.map((img) => (
              <motion.div
                key={img.side}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFullscreenImg(img)}
                className="rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer active:ring-2 active:ring-accent"
              >
                <img src={img.src} alt={`ID ${img.side}`} className="w-full h-auto object-cover" />
                <p className="text-[10px] text-center text-muted-foreground py-1 bg-card">{img.side}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 justify-center text-xs text-muted-foreground"
        >
          <RotateCw size={12} />
          <span>Last synced: Just now</span>
        </motion.div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {fullscreenImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={() => setFullscreenImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFullscreenImg(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center z-10"
              >
                <X size={20} className="text-foreground" />
              </button>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={fullscreenImg.src}
                  alt={`${fullscreenImg.label} ${fullscreenImg.side}`}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-sm font-bold text-foreground">{fullscreenImg.label}</p>
                <p className="text-xs text-muted-foreground">{fullscreenImg.side} · {profileName}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
};

export default LicenceCard;
