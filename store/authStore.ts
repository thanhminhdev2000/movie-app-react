import { User } from "@/types";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  login: (user: User | null, accessToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user: User | null, accessToken: string) => {
    set({ user });
    localStorage.setItem("accessToken", accessToken);
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem("accessToken");
  },
}));

export default useAuthStore;
