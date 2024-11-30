import { useCartStore } from "../store/useCartStore"

export const  useCart = () => {
    
    const cart = useCartStore(state => state.cart)

    if (cart === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return cart
}