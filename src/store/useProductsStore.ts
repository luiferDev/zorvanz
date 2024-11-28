import { create } from 'zustand'
import { PaginatedResponse, Category, Product } from '../types/interfaces'

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

interface State {
    products: Product[]
    fetchProducts: () => Promise<void>
}

export const useProductsStore = create<State>((set) => ({
    products: [],

    fetchProducts: async () => {
            const res = await fetch("/mocks.json")   
            const json: PaginatedResponse = await res.json()
            set({ products: json.content })
    },
}))
