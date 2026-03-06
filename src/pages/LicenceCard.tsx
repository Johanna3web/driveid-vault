import { motion } from "framer-motion";
import { ArrowLeft, RotateCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import mockLicenceFront from "@/assets/mock-licence-front.png";
import mockLicenceBack from "@/assets/mock-licence-back.png";
import mockIdFront from "@/assets/mock-id-front.png";
import mockIdBack from "@/assets/mock-id-back.png";

const LicenceCard = () => {
  const navigate = useNavigate();

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
          <h1 className="text-lg font-bold text-foreground">My Cards</h1>
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
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <img src={mockLicenceFront} alt="Licence Front" className="w-full h-auto object-cover" />
              <p className="text-[10px] text-center text-muted-foreground py-1 bg-card">Front</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <img src={mockLicenceBack} alt="Licence Back" className="w-full h-auto object-cover" />
              <p className="text-[10px] text-center text-muted-foreground py-1 bg-card">Back</p>
            </div>
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
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <img src={mockIdFront} alt="ID Front" className="w-full h-auto object-cover" />
              <p className="text-[10px] text-center text-muted-foreground py-1 bg-card">Front</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <img src={mockIdBack} alt="ID Back" className="w-full h-auto object-cover" />
              <p className="text-[10px] text-center text-muted-foreground py-1 bg-card">Back</p>
            </div>
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
    </AppLayout>
  );
};

export default LicenceCard;
