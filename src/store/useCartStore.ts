import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartContextType } from '../types/interfaces'

export const useCartStore = create<CartContextType>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product) =>
                set((state) => {
                    const existingProduct = state.cart.find(
                        (item) => item.id === product.id,
                    )

                    if (existingProduct) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? {
                                          ...item,
                                          quantity: (item.quantity || 0) + 1,
                                      }
                                    : item,
                            ),
                        }
                    }
                    return {
                        cart: [...state.cart, { ...product, quantity: 1 }],
                    }
                }),

            removeFromCart: (product) =>
                set((state) => {
                    const existingProduct = state.cart.find(
                        (item) => item.id === product.id,
                    )

                    if ((existingProduct?.quantity ?? 0) > 1) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? {
                                          ...item,
                                          quantity: (item.quantity || 0) - 1,
                                      }
                                    : item,
                            ),
                        }
                    }

					return {
						cart: state.cart.filter((item) => item.id !== product.id),}
                }),


            deleteFromCart: (product) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== product.id),
                })),

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart',
        },
    ),
)
