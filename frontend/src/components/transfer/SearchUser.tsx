import { Search, Users } from "lucide-react";
import { useEffect, useState } from "react";

import type { User } from "../../types/user";

import { searchUsers } from "../../services/user.service";

import { Avatar } from "../ui/Avatar";
import { EmptyState } from "../common/EmptyState";

interface SearchUserProps {
  onSelect: (user: User) => void;
}

export const SearchUser = ({
  onSelect,
}: SearchUserProps) => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (!search.trim()) {
    setUsers([]);
    return;
  }

  const timer = setTimeout(async () => {
    try {
      setLoading(true);

      const data = await searchUsers(search);

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, 400);

  return () => clearTimeout(timer);
}, [search]);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-bold">
        Search User
      </h2>

      <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-indigo-500">

        <Search
          size={20}
          className="text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="ml-3 w-full bg-transparent outline-none"
        />

      </div>

      <div className="mt-6 space-y-3">

        {loading ? (

          <p className="text-center text-slate-500">
            Searching...
          </p>

        ) : users.length > 0 ? (

          users.map((user) => (
            <button
              key={user.id}
              onClick={() => onSelect(user)}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-indigo-500 hover:bg-slate-50 hover:shadow-md"
            >

              <div className="flex items-center gap-4">

                <Avatar
                  name={`${user.firstName} ${user.lastName}`}
                  size={50}
                />

                <div className="text-left">

                  <h3 className="font-semibold text-slate-800">
                    {user.firstName} {user.lastName}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {user.email}
                  </p>

                </div>

              </div>

              <span className="text-sm font-medium text-indigo-600">
                Select →
              </span>

            </button>
          ))

        ) : (

          <EmptyState
            icon={<Users className="text-indigo-600" size={36} />}
            title="No Users Found"
            description="Try searching with a different name or email."
          />

        )}

      </div>

    </div>
  );
};