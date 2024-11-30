import { useState } from "react";
import { useId } from "react";
import '../styles/cart.css';
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";

interface CartItemI {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
    quantity: number;
    addToCart: () => void;
}

function CartItem({ id, imageUrl, price, name, quantity, addToCart }: CartItemI) {
    return (
        <li className="cart__item__container" key={id}>
            <img className="cart__item__img" src={imageUrl} alt={name} />
            <div className="cart__item">
                <strong>{name}</strong> ${price}
            </div>
            <footer className="cart__footer">
                <small>Qty: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default function Cart() {

    const cartCheckboxId = useId();
    const [isOpen, setIsOpen] = useState(false)

    const productsInCart = useCartStore(state => state.cart)
    const clearCart = useCartStore(state => state.clearCart)
    const addToCart = useCartStore(state => state.addToCart)

    const toggleCart = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <motion.label
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 17 }}
                className="card__button"
                htmlFor={cartCheckboxId}
                onClick={toggleCart}
            >
                <img src="/cart.webp" alt="" />
            </motion.label>

            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className={`cart ${isOpen ? 'show' : 'hide'}`}>
                <ul className="cart__container">
                    {productsInCart.map((product) => (
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
