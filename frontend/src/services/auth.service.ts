import api from "./api";
import { storage } from "../utils/storage";

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  const response = await api.post("/auth/signup", data);

  storage.setToken(response.data.data.token);

  return response.data.data;
};

export const login = async (data: LoginData) => {
  const response = await api.post("/auth/signin", data);

  storage.setToken(response.data.data.token);

  return response.data.data;
};

export const getProfile = async () => {
  const response = await api.get("/auth/me");

  return response.data.data;
};

export interface UpdateProfileData {
  firstName: string;
  lastName: string;
  phone?: string;
}

export const updateProfile = async (
  data: UpdateProfileData
) => {
  const response = await api.patch(
    "/auth/profile",
    data
  );

  return response.data.data;
};

export const logout = () => {
  storage.removeToken();
};

export const isAuthenticated = () => {
  return storage.isAuthenticated();
};