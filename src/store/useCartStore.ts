import { create } from 'zustand'
import { Products } from '../types/interfaces'

type CartState = {
    cart: Products[]
    addToCart: (product: Products) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id)

            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: (item.quantity || 0) + 1 }
                            : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] }
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
    clearCart: () => set({ cart: [] }),
}))
