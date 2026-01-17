import { create } from "zustand";
import type { User } from "../types";
import { jwtDecode } from "jwt-decode";

type AuthState = {
  authenticated: boolean;
  token: NullOr<string>;
  user: NullOr<User>;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  authenticated: false,
  token: null,
  user: null,
  setToken: (token: string) => {
    const decodedToken = jwtDecode(token) as User;
    set({ authenticated: true, token, user: decodedToken });
  },
}));
