export interface Product {
    id: number
    name: string
    description: string
    price: number
    category: Category
    stock: number
    popularity: number
    imageUrl: string
}

export interface Category {
    categoryId: number
    categoryName: string
}

export interface PaginatedResponse {
	data: Product[]
	pageNumber: number
	pageSize: number
	totalPages: number
	totalRecords: number
}

export interface UseFragrancesState {
    fragrances: Product[]
    loading: boolean
    error: string | null
}

// Define the Product interface, including the quantity property
export interface Products {
    category: Category
    stock: number
    id: number
    imageUrl: string
    price: number
    name: string
    quantity?: number
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

export interface ProductDefinition {
    id: number
    name: string
    imageUrl: string
    price: number
    description: string
    stock: number
    popularity: number
    category: Category
    selectedProduct?: number
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

export interface Role {
	User: string
	Admin: string
}