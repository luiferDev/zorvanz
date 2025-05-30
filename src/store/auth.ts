import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
    token: string
    profile: Profile | null
    isAuth: boolean
}

interface Profile {
    id: string
	name: string
	lastName: string
    email: string
    username: string
}

interface Actions {
    setToken: (token: string) => void
    setProfile: ( profile: Profile ) => void
    logout: () => void
}

export const useAuthStore = create<State & Actions>()(
    persist(
        (set) => ({
			token: '',
			profile: null,
            isAuth: false,
			setToken: (token: string) => set({ token, isAuth: true }),
			setProfile: (profile: Profile) => set({ profile }),
            logout: () => set({ token: '', isAuth: false }),
        }),
        {
            name: 'auth',
        },
    ),
)
