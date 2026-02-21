import { create } from "zustand";

type UserState = {
    name: string,
    isLoggedIn: boolean,
    login: (name: string) => void,
    logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  name: "",
  isLoggedIn: false,
  login: (name) => set({ name, isLoggedIn: true }),
  logout: () => set({ name: "", isLoggedIn: false }),
}))