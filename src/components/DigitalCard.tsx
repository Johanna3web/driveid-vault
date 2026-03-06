import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import type { DocumentStatus } from "./StatusBadge";
import StatusBadge from "./StatusBadge";

interface DigitalCardProps {
  type: "licence" | "id";
  name: string;
  number: string;
  category?: string;
  issueDate: string;
  expiryDate: string;
  photo?: string;
  status: DocumentStatus;
  onClick?: () => void;
}

const DigitalCard = ({
  type,
  name,
  number,
  category,
  issueDate,
  expiryDate,
  photo,
  status,
  onClick
}: DigitalCardProps) => {
  const isLicence = type === "licence";

  return (
    <motion.div
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`relative rounded-2xl p-5 shadow-lg border border-border overflow-hidden ${
      onClick ? "cursor-pointer" : ""} ${

      isLicence ?
      "bg-gradient-to-br from-accent to-accent/80" :
      "bg-gradient-to-br from-primary to-primary/80"}`
      }>
      
      {/* Background pattern */}
      



      

      <div className="relative z-10 flex gap-4">
        {/* Photo */}
        {photo &&
        <div className="w-16 h-20 rounded-lg overflow-hidden border-2 border-white/30 flex-shrink-0">
            <img src={photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        }

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-medium text-white/70 uppercase tracking-wider">
              {isLicence ? "Driver's Licence" : "Identity Document"}
            </p>
            <StatusBadge status={status} />
          </div>
          <p className="text-sm font-bold text-white truncate">{name}</p>
          <p className="text-xs text-white/80 font-mono mt-0.5">{number}</p>
          {category &&
          <p className="text-[10px] text-white/70 mt-1">Category: {category}</p>
          }
          <div className="flex gap-4 mt-2">
            <div>
              <p className="text-[8px] text-white/50 uppercase">Issued</p>
              <p className="text-[10px] text-white/90">{issueDate}</p>
            </div>
            <div>
              <p className="text-[8px] text-white/50 uppercase">Expires</p>
              <p className="text-[10px] text-white/90">{expiryDate}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>);

};

export default DigitalCard;