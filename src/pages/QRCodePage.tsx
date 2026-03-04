import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Download, RotateCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import AppLayout from "@/components/AppLayout";
import { supabase } from "@/integrations/supabase/client";

const QRCodePage = () => {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState("Loading...");
  const [idNumber, setIdNumber] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("profiles").select("full_name, id_number").eq("user_id", user.id).single();
      if (data) {
        setProfileName(data.full_name);
        setIdNumber(data.id_number || "");
      }
    };
    fetchProfile();
  }, []);

  const initials = profileName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  const qrValue = `DRIVEID://verify/${initials}-${idNumber}-${Date.now()}`;

  return (
    <AppLayout>
      <div className="px-5 pt-12 pb-4 flex flex-col min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center"
          >
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">My QR Code</h1>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-card rounded-3xl p-6 shadow-xl border border-border w-full max-w-xs mx-auto"
          >
            <div className="text-center mb-5">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full card-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">{initials}</span>
              </div>
              <h2 className="font-bold text-foreground">{profileName}</h2>
              <p className="text-xs text-muted-foreground font-mono">{idNumber || "—"}</p>
            </div>

            <div className="bg-background rounded-2xl p-4 mb-4">
              <QRCode
                value={qrValue}
                size={200}
                style={{ width: "100%", height: "auto" }}
                bgColor="transparent"
                fgColor="hsl(215, 65%, 18%)"
              />
            </div>

            <div className="flex items-center gap-1.5 justify-center text-xs text-muted-foreground">
              <RotateCw size={10} />
              <span>Refreshes in 23:41:12</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-6"
          >
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-sm font-medium text-foreground">
              <Share2 size={16} />
              Share
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-sm font-medium text-foreground">
              <Download size={16} />
              Save
            </button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-[10px] text-muted-foreground mt-4"
        >
          Present this QR code to a traffic officer for instant verification.
          <br />
          Your data is encrypted and secure.
        </motion.p>
      </div>
    </AppLayout>
  );
};

export default QRCodePage;
