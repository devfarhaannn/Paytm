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

import { signup } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export const SignUp = () => {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await signup({
        firstName: firstname,
        lastName: lastname,
        email,
        password,
      });

     
      await refreshUser();

      toast.success("Account created successfully!");

      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Signup failed."
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
        title="Create Account 💳"
        subtitle="Join FabPay and start sending money securely."
        linkText="Already have an account?"
        linkTo="/signin"
      />

      <AuthForm onSubmit={handleSignup}>
        <Input
          label="First Name"
          placeholder="Enter your first name"
          value={firstname}
          onChange={setFirstname}
          icon="user"
        />

        <Input
          label="Last Name"
          placeholder="Enter your last name"
          value={lastname}
          onChange={setLastname}
          icon="user"
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          icon="email"
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          value={password}
          onChange={setPassword}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <Button
          type="submit"
          loading={loading}
          label={
            loading
              ? "Creating Account..."
              : "Create Account"
          }
        />
      </AuthForm>
    </AuthLayout>
  );
};