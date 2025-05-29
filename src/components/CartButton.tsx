import { motion } from 'framer-motion'
import { Product } from '../types/interfaces'
import { useCartStore } from '../store/useCartStore'

interface CartButtonProps {
    product: Product
}

export default function CartButton({ product }: CartButtonProps) {
    const cart = useCartStore((state) => state.cart)
    const addToCart = useCartStore((state) => state.addToCart)
    const deleteFromCart = useCartStore((state) => state.deleteFromCart)

    const checkProductInCart = (product: Product) => {
        return cart.some((item) => item.id === product.id)
    }

    const isProductInCart = checkProductInCart(product)

    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                style={{
					backgroundColor: isProductInCart ? 'transparent' : '#1c2470',
					color: isProductInCart ? 'black' : 'white'
                }}
                onClick={() =>
                    isProductInCart
                        ? deleteFromCart(product)
                        : addToCart(product)
                }
                className="text-white flex justify-center items-center p-2 rounded-[10%] cursor-pointer"
            >
                {isProductInCart ? (
                    <div>En el carrito</div>
                ) : (
                    <div>Añadir al carrito</div>
                )}
            </motion.button>
        </div>
    )
}
