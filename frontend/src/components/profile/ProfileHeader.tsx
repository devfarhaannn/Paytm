import { Camera } from "lucide-react";

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const ProfileHeader = ({
  firstName,
  lastName,
  email,
}: ProfileHeaderProps) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex flex-col items-center">

        <div className="relative">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-4xl font-bold text-white">

            {firstName.charAt(0)}

          </div>

          <button
            className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-md hover:bg-slate-100"
          >
            <Camera size={18} />
          </button>

        </div>

        <h2 className="mt-5 text-3xl font-bold">

          {firstName} {lastName}

        </h2>

        <p className="mt-2 text-slate-500">

          {email}

        </p>

        <span className="mt-4 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">

          ✔ Verified Account

        </span>

      </div>

    </div>
  );
};