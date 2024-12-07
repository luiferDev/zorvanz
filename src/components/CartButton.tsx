import { motion } from "framer-motion"
import { Product } from "../types/interfaces"
import { useCartStore } from "../store/useCartStore"

interface CartButtonProps {
    product: Product
}

export default function CartButton({ product }: CartButtonProps) {

    const cart = useCartStore(state => state.cart)
    const addToCart = useCartStore(state => state.addToCart)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    const checkProductInCart = (product: Product) => {
        return cart.some(item => item.id === product.id)
    }

    const isProductInCart = checkProductInCart(product)

    return (
        <div>
            <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{
                    backgroundColor
                        : isProductInCart ? '#701c1c' : '#1c2470'
                }}
                onClick={() =>
                    isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                } className='add__btn'>
                {
                    isProductInCart
                        ? <img src="/removeCart.webp" 
                            alt="imagen de remover al carrito de la compra" width={25} height={25} />
                        : <img src="/carrito.webp" 
                            alt="imagen de añadir al carrito de la compra" width={30} height={30} />
                }
            </motion.button>
        </div>
    )
}
