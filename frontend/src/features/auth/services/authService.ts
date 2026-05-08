import type { LoginPayload, AuthResponse } from "../types";

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (payload.email === "leesin20avenged@gmail.com" && payload.password === "a7xgera") {
    return {
      token: "fake-jwt-token",
    };
  }

  throw new Error("Invalid credentials");
};
