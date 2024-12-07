import { create } from "zustand"
import { persist } from "zustand/middleware"

interface State {
    token: string
}

interface Actions {
    setToken: (token: string) => void
}

export const useAuthStore = create<State & Actions>()(persist(
    (set) => ({
        token: "",
        setToken: (token: string) => set({ token })
    }),
    {
        name: "auth"
    }
))
