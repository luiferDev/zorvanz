import { useCart } from "../hooks/useCart"
import { Fragrance } from "../types/interfaces"


interface CartButtonProps {
    product: Fragrance
}

export default function CartButton({ product }: CartButtonProps) {

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product: Fragrance) => {
        return cart.some(item => item.id === product.id)
    }

    const isProductInCart = checkProductInCart(product)

    return (
        <div>
            <button
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
                        ? <img src="/removeCart.webp" alt="imagen de remover al carrito de la compra" width={25} height={25} />
                        : <img src="/carrito.webp" alt="imagen de añadir al carrito de la compra" width={30} height={30} />
                }
            </button>
        </div>
    )
}
