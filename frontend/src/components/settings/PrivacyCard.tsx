import {
  Lock,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const PrivacyCard = () => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Security
      </h2>

      <div className="space-y-5">

        <PrivacyRow
          icon={<Lock className="text-indigo-600" />}
          title="Change Password"
        />

        <PrivacyRow
          icon={<ShieldCheck className="text-green-600" />}
          title="Two-Factor Authentication"
        />

        <PrivacyRow
          icon={<Smartphone className="text-orange-600" />}
          title="Trusted Devices"
        />

      </div>

    </div>
  );
};

interface PrivacyRowProps {
  icon: React.ReactNode;
  title: string;
}

const PrivacyRow = ({
  icon,
  title,
}: PrivacyRowProps) => (
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      {icon}

      <span>{title}</span>

    </div>

    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
      Soon
    </span>

  </div>
);