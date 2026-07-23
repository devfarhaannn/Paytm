import api from "./api";

import type { User } from "../types/user";

export const searchUsers = async (
  query: string
): Promise<User[]> => {
  const response = await api.get("/users/search", {
    params: {
      query,
    },
  });

  return response.data.data;
};