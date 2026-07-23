import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthLayout } from "../components/layout/AuthLayout";
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthForm } from "../components/auth/AuthForm";

import { Input } from "../components/ui/Input";
import { PasswordInput } from "../components/ui/PasswordInput";
import { Button } from "../components/ui/Button";

import { login } from "../services/auth.service";

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await login({
        email,
        password,
      });

      toast.success("Welcome Back!");

      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
          "Invalid email or password."
        );
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Welcome Back 👋"
        subtitle="Sign in to your FlowPay account to continue."
        linkText="Don't have an account?"
        linkTo="/signup"
      />

      <AuthForm onSubmit={handleLogin}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>

          <button
            type="button"
            className="font-medium text-indigo-600 transition hover:text-indigo-700"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          loading={loading}
          label={loading ? "Signing In..." : "Sign In"}
        />
      </AuthForm>
    </AuthLayout>
  );
};