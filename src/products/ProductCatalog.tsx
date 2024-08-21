import { NavBar } from "../components/NavBar"
import { useCart } from "../hooks/useCart"
import { useFragrances } from "../hooks/useFragrances"
import { Product } from "../types/interfaces"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"



export default function ProductCatalog() {

    const { addToCart, removeFromCart, cart } = useCart()
    const { fragrances, loading, error } = useFragrances()

    const checkProductInCart = (product: Product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <>
            <NavBar />
            <h1>Productos</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && fragrances &&
                fragrances.map(fragrance => {
                    const isProductInCart = checkProductInCart(fragrance)
                    return (
                        <>
                            <ProductList fragrance={fragrance}/>
                            <div>
                                <button 
                                style={{ backgroundColor
                                    : isProductInCart ? '#701c1c' : '#1c2470' }}
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
                        </>
                    )
                })}
            <Footer />
        </>
    )
}
