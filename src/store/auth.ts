import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { State, Actions, Profile } from '../types/interfaces'

export const useAuthStore = create<State & Actions>()(
    persist(
        (set) => ({
            token: '',
            profile: null,
            isAuth: false,
            setToken: (token: string) => set({ token, isAuth: true }),
            setProfile: (profile: Profile) => set({ profile }),
            logout: () => set({ token: '', isAuth: false, profile: null }),
        }),
        {
            name: 'auth',
        },
    ),
)
