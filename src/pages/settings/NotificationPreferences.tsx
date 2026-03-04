import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const NotificationPreferences = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);

  const toggle = (label: string, value: boolean, setter: (v: boolean) => void) => {
    setter(value);
    toast({ title: `${label} notifications ${value ? "enabled" : "disabled"}` });
  };

  const items = [
    { icon: Bell, label: "Push Notifications", desc: "Real-time alerts on your device", value: push, setter: setPush },
    { icon: Mail, label: "Email Notifications", desc: "Updates sent to your inbox", value: email, setter: setEmail },
    { icon: MessageSquare, label: "SMS Notifications", desc: "Text messages for urgent alerts", value: sms, setter: setSms },
  ];

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Notification Preferences</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
          {items.map(item => (
            <div key={item.label} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <item.icon size={16} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              <Switch checked={item.value} onCheckedChange={v => toggle(item.label.replace(" Notifications", ""), v, item.setter)} />
            </div>
          ))}
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default NotificationPreferences;
