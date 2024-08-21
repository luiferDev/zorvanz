import { useCart } from "../hooks/useCart"
import { Fragrance } from "../types/interfaces"


interface CartButtonProps {
    isProductInCart: boolean
    fragrance: Fragrance
}

export default function CartButton({ isProductInCart, fragrance }: CartButtonProps) {

    const { addToCart, removeFromCart } = useCart()

    return (
        <div>
            <button
                style={{
                    backgroundColor
                        : isProductInCart ? '#701c1c' : '#1c2470'
                }}
                onClick={() =>
                    isProductInCart
                        ? removeFromCart(fragrance)
                        : addToCart(fragrance)
                } className='add__btn'>
                {
                    isProductInCart
                        ? <img src="/removeCart.webp" alt="imagen de remover al carrito de la compra" width={30} height={30} />
                        : <img src="/carrito.webp" alt="imagen de añadir al carrito de la compra" width={30} height={30} />
                }
            </button>
        </div>
    )
}
