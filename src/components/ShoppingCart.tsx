import { useCartStore } from '../store/useCartStore'
import { CartItem } from './Cart'

export default function ShoppingCart() {
    const productsInCart = useCartStore((state) => state.cart)
    const clearCart = useCartStore((state) => state.clearCart)
    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)

    return (
        <>
            <main className="w-[50vw] ml-8 bg-gray-50 rounded-sm">
                <div className="ml-8 max-w-[685px]">
                    <h2 className="pt-8 mt-8 text-3xl lg:text-5xl">Carrito</h2>
                    <span className='flex items-end! justify-end! text-sm font-extralight text-right! after:content-[""] after:w-[685px] after:absolute after:h-[1px] after:bg-gray-500 after:top-36'>
                        Precio
                    </span>
                    <ul className="mt-4 flex flex-col gap-4 items-start">
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
                    {/* Calculate total quantity and price */}
                    <div className="pt-4 gap-2 flex flex-row items-end! justify-end!">
                        <span className="text-xl">Subtotal</span>
                        <span className="text-xl">
                            (
                            {productsInCart.reduce(
                                (total, product) =>
                                    total + (product.quantity || 1),
                                0,
                            )}{' '}
                            productos):{' '}
                        </span>
                        <strong className="text-xl">
                            $
                            {productsInCart
                                .reduce(
                                    (total, product) =>
                                        total +
                                        product.price * (product.quantity || 1),
                                    0,
                                )
                                .toFixed(2)}
                        </strong>
                    </div>

                    <button
                        onClick={clearCart}
                        className="flex justify-center items-center h-[50px] w-[50px] cursor-pointer relative rounded-[25%] left-[75px] bg-[#441c1c] mt-4"
                    >
                        <img
                            className="items-center justify-center flex h-[30px] transition-all duration-[0.3s] ease-[ease] w-[30px] z-[9999] p-1"
                            src="/removeCart.webp"
                            alt="imagen de remover del carrito"
                        />
                    </button>
                </div>
            </main>
        </>
    )
}
