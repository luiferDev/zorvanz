export interface Fragrance {
    id: number
    name: string
    imageUrl: string
    price: number
    description: string
    stock: number
    popularity: number
    category: Category
}

export interface Category {
    categoryId: number
    categoryName: string
}

export interface ApiResponse {
    content: Fragrance[]
}

export interface UseFragrancesState {
    fragrances: Fragrance[]
    loading: boolean
    error: string | null
}

// Define the Product interface, including the quantity property
export interface Product {
    id: number
    imageUrl: string
    price: number
    name: string
    quantity?: number
}

export interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void
    clearCart: () => void
    removeFromCart: (product: Product) => void
}

export interface Filters {
    categoryName: string
    price: number
}

export interface FilterContextType {
    filters: {
        categoryName: string;
        price: number;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        categoryName: string;
        price: number;
    }>>
}