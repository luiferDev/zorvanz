import { Product, Products } from "../features/products/types/productTypes"

export interface UseFragrancesState {
    fragrances: Product[]
    loading: boolean
    error: string | null
}

export interface CartContextType {
    cart: Products[]
    addToCart: (product: Products) => void
    clearCart: () => void
    removeFromCart: (product: Products) => void
    deleteFromCart: (product: Products) => void
}

export interface Filters {
    categoryName: string
    price: number
}

export interface FilterContextType {
    filters: {
        categoryName: string
        price: number
    }
    setFilters: React.Dispatch<
        React.SetStateAction<{
            categoryName: string
            price: number
        }>
    >
}


export interface State {
    token: string
    profile: Profile | null
    isAuth: boolean
}

export interface Profile {
    id: string
    name: string
    lastName: string
    email: string
	userName: string
	role: string
}

export interface Actions {
    setToken: (token: string) => void
    setProfile: (profile: Profile) => void
    logout: () => void
}

export interface LoginFormInputs {
    userName: string
    password: string
}

export interface RegisterFormInputs {
	name: string
	lastName: string
    userName: string
	password: string
	email: string
	role?: Role
}

export enum Role {
	User = 'User',
	Admin = 'Admin'
}