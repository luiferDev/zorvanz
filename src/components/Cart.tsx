import { useId } from "react"
import '../styles/cart.css'
import { useCart } from "../hooks/useCart"
import { Product } from "../types/interfaces"


interface CartItemI {
    id: number
    imageUrl: string,
    price: number,
    name: string,
    quantity: number
    addToCart: () => void
}


function CartItem({ id, imageUrl, price, name, quantity, addToCart }: CartItemI) {

    return (
        <li key={id}>
            <img src={imageUrl}
                alt={name} />
            <div>
                <strong>{name}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default function Cart() {

    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className="card__button" htmlFor={cartCheckboxId}>
                <img src="/cart.webp" alt="" />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul className="cart__container">
                    {cart.map((product: Product) => (
                        <CartItem key={product.id}
                            id={product.id}
                            addToCart={() => addToCart(product)}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            quantity={product.quantity || 1}
                        />
                    ))}
                </ul>
                <button onClick={clearCart} className="btn__img">
                    <img src="/removeCart.webp" alt="imagen de remover del carrito" />
                </button>
            </aside>
        </>
    )
}
