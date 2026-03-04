import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Fingerprint, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Security = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const handleChangePassword = async () => {
    if (newPassword.length < 6) { toast({ title: "Password must be at least 6 characters", variant: "destructive" }); return; }
    if (newPassword !== confirmPassword) { toast({ title: "Passwords do not match", variant: "destructive" }); return; }
    setSaving(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setSaving(false);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Password updated successfully" }); setNewPassword(""); setConfirmPassword(""); }
  };

  return (
    <AppLayout>
      <div className="px-5 pt-14 pb-24">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/settings")} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Security</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {/* Change Password */}
          <div className="bg-card rounded-xl border border-border p-4 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Lock size={16} className="text-foreground" />
              <p className="text-sm font-semibold text-foreground">Change Password</p>
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Min 6 characters" />
            </div>
            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={handleChangePassword} disabled={saving} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
              {saving ? "Updating..." : "Update Password"}
            </button>
          </div>

          {/* MFA Toggle */}
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <ShieldCheck size={16} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Multi-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Extra layer of security</p>
                </div>
              </div>
              <Switch checked={mfaEnabled} onCheckedChange={v => { setMfaEnabled(v); toast({ title: v ? "MFA enabled" : "MFA disabled" }); }} />
            </div>
          </div>

          {/* Biometric Toggle */}
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                  <Fingerprint size={16} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Biometric Login</p>
                  <p className="text-xs text-muted-foreground">Fingerprint or Face ID</p>
                </div>
              </div>
              <Switch checked={biometricEnabled} onCheckedChange={v => { setBiometricEnabled(v); toast({ title: v ? "Biometric login enabled" : "Biometric login disabled" }); }} />
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Security;
