import { motion } from 'framer-motion'
import { Link } from 'react-router'

interface CartItemI {
    id: number
    imageUrl: string
    price: number
    name: string
    quantity: number
    addToCart: () => void
    removeFromCart: () => void
}

export function CartItem({
    id,
    imageUrl,
    price,
    name,
    quantity,
    addToCart,
    removeFromCart,
}: CartItemI) {
    return (
        <li
            className="text-black list-none border-b-[1px] border-b-gray-500 pb-3.5 "
            key={id}
        >
            <div className="flex flex-col lg:flex-row">
                <img
                    className="pt-8 aspect-square w-44 mr-8"
                    src={imageUrl}
                    alt={name}
                />
                <div className="flex flex-col">
                    <div className="flex flex-col justify-start items-start text-xl pt-4 lg:justify-center lg:items-center">
                        <strong className="text-2xl items-center pt-4 lg:w-96">
                            {name}
                        </strong>
                        <strong className="text-xl lg:hidden">
                            ${price} <span>COP</span>
                        </strong>
                    </div>
                    <div className="flex flex-row gap-1.5 justify-between items-center border-2 border-solid border-zorvanz-red rounded-full mt-4 w-32 px-3">
                        {quantity === 1 ? (
                            <img
                                className="w-5 h-5"
                                onClick={removeFromCart}
                                src="/trash.webp"
                                alt="icono de basura para eliminar"
                                width={15}
                                height={15}
                            />
                        ) : (
                            <img
                                onClick={removeFromCart}
                                src="/minus.webp"
                                alt="icono de resta"
                                width={15}
                                height={15}
                            />
                        )}
                        <small className="text-xl">{quantity}</small>
                        <img
                            src="/plus.webp"
                            alt="imagend el signo de suma"
                            width={15}
                            height={15}
                            onClick={addToCart}
                        />
                    </div>
                </div>
                <strong className="invisible lg:text-xl lg:mt-9 lg:ml-12 lg:visible!">
                    ${price}
                </strong>
            </div>
        </li>
    )
}

export function Cart() {
    return (
        <>
            <Link
                className="bg-zorvanz-red rounded-full cursor-pointer w-8 h-8 flex items-center justify-center z-50 lg:w-11 lg:h-11 lg:transition-all lg:duration-300 lg:ease-in-out"
                to="/cart"
            >
                <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                    }}
                    src="/online-shopping.webp"
                    alt="cart image"
                    width={20}
                    height={20}
                />
            </Link>
        </>
    )
}
