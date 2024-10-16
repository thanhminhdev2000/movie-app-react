import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  
  login: (token: string) => set({
    accessToken: token
  }),
  
  logout: () => {
    set({ accessToken: null });
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}));

export default useAuthStore;
