import { NavBar } from "../components/NavBar"
import { useCart } from "../hooks/useCart"
import { useFragrances } from "../hooks/useFragrances"
import { Product } from "../types/interfaces"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"
import CartButton from "../components/CartButton"

export default function ProductCatalog() {

    const { cart } = useCart()
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
                            <ProductList fragrance={fragrance} />
                            <CartButton
                                isProductInCart={isProductInCart}
                                fragrance={fragrance} />
                        </>
                    )
                })}
            <Footer />
        </>
    )
}
