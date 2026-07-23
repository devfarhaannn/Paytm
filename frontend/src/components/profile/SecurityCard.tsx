import {
    Lock,
    ShieldCheck,
    Clock3,
  } from "lucide-react";
  
  export const SecurityCard = () => {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">
          Security
        </h2>
  
        <div className="space-y-5">
  
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <Lock className="text-indigo-600" />
  
              <div>
                <h3 className="font-semibold">
                  Password
                </h3>
  
                <p className="text-sm text-slate-500">
                  Last updated 15 days ago
                </p>
              </div>
            </div>
  
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
              Change
            </button>
          </div>
  
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-green-600" />
  
              <div>
                <h3 className="font-semibold">
                  Two-Factor Authentication
                </h3>
  
                <p className="text-sm text-slate-500">
                  Coming Soon
                </p>
              </div>
            </div>
  
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
              Soon
            </span>
          </div>
  
          <div className="flex items-center gap-4">
            <Clock3 className="text-orange-600" />
  
            <div>
              <h3 className="font-semibold">
                Last Login
              </h3>
  
              <p className="text-sm text-slate-500">
                Today • 10:42 AM
              </p>
            </div>
          </div>
  
        </div>
      </div>
    );
  };