import { useState } from "react";

import type { FormEvent } from "react";

import { login } from "../services/authService";

import Input from "../../../shared/ui/Input";

import Button from "../../../shared/ui/Button";

import {
  GraduationCap,
  Mail,
  Lock,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Email is required");

      return;
    }

    if (!password.trim()) {
      setError(
        "Password is required"
      );

      return;
    }

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.token
      );

      window.location.href =
        "/students";
    } catch {
      setError(
        "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-2xl
          shadow-lg
          p-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            mb-8
          "
        >
          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              mb-4
            "
          >
            <GraduationCap
              size={32}
            />
          </div>

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            EduSync
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              className="
                text-sm
                font-medium
                mb-1
                block
              "
            >
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <Input
                type="email"
                placeholder="admin@test.com"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label
              className="
                text-sm
                font-medium
                mb-1
                block
              "
            >
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="pl-10"
              />
            </div>
          </div>

          {error && (
            <div
              className="
                bg-red-100
                text-red-700
                px-4
                py-3
                rounded-lg
                text-sm
              "
            >
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3
              text-base
            "
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </Button>
        </form>

        <div
          className="
            mt-6
            text-sm
            text-gray-500
            text-center
          "
        >
          Demo credentials:
          <br />
          admin@test.com / 1234
        </div>
      </div>
    </div>
  );
}