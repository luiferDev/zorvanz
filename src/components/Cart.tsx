import { useState } from 'react'
import { useId } from 'react'
import '../styles/cart.css'
import { motion } from 'framer-motion'
import { useCartStore } from '../store/useCartStore'

interface CartItemI {
    id: number
    imageUrl: string
    price: number
    name: string
    quantity: number
    addToCart: () => void
    removeFromCart: () => void
}

function CartItem({
    id,
    imageUrl,
    price,
    name,
    quantity,
    addToCart,
    removeFromCart,
}: CartItemI) {
    return (
        <li className="text-amber-50 list-none" key={id}>
            <img className="pt-8 aspect-square w-full" src={imageUrl} alt={name} />
            <div className="flex flex-col justify-center items-center text-xl pt-4">
                <strong className='text-xl items-center pt-4'>{name}</strong> ${price}
            </div>
            <footer className="flex gap-[5px] justify-center items-center pt-4 pb-2 px-0">
                <small className='text-xl'>Qty: {quantity}</small>
                <button className='p-4 bg-[#1c2470] text-amber-50 rounded-full' onClick={addToCart}>+</button>
                <button className='p-4 bg-[#1c2470] text-amber-50 rounded-full' onClick={removeFromCart}> - </button>
            </footer>
        </li>
    )
}

export default function Cart() {
    const cartCheckboxId = useId()
    const [isOpen, setIsOpen] = useState(false)

    const productsInCart = useCartStore((state) => state.cart)
    const clearCart = useCartStore((state) => state.clearCart)
    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)

    const toggleCart = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <motion.label
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    duration: 0.2,
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                }}
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
                        <CartItem
                            key={product.id}
                            id={product.id}
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            quantity={product.quantity || 1}
                        />
                    ))}
                </ul>
                <button
                    onClick={clearCart}
                    className="flex justify-center items-center h-[50px] w-[50px] cursor-pointer relative rounded-[25%] left-[75px] bg-[#441c1c]"
                >
                    <img
                        className="items-center justify-center flex h-[30px] transition-all duration-[0.3s] ease-[ease] w-[30px] z-[9999] p-1"
                        src="/removeCart.webp"
                        alt="imagen de remover del carrito"
                    />
                </button>
            </aside>
        </>
    )
}
