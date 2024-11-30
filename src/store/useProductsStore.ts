import { create } from 'zustand'
import { ProductDefinition } from '../types/interfaces'

// Estado y acciones del store
interface State {
    products: ProductDefinition[]
    filteredProducts: ProductDefinition[] // Lista de productos filtrados
    category: ProductDefinition['category']['categoryName']
    price: number
}

interface Action {
    filterProductsCategory: (category: State['category']) => void
    filterProductsPrice: (price: State['price']) => void
    setProducts: (products: ProductDefinition[]) => void // Acción para establecer productos
}

// Store de Zustand
export const useProductsStore = create<State & Action>((set) => ({
    products: [], // Productos originales
    filteredProducts: [], // Productos filtrados
    category: '',
    price: 0,

    // Acción para establecer productos originales
    setProducts: (products: ProductDefinition[]) => set(() => ({ products, filteredProducts: products })),

    // Filtro por categoría
    filterProductsCategory: (category: string) =>
        set((state) => ({
            category,
            filteredProducts: state.products.filter((product) => product.category.categoryName === category),
        })),

    // Filtro por precio máximo
    filterProductsPrice: (price: number) =>
        set((state) => ({
            price,
            filteredProducts: state.products.filter((product) => product.price <= price),
        })),
}))
