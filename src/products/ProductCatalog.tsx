import { NavBar } from "../components/NavBar"
import { useFragrances } from "../hooks/useFragrances"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"
import CartButton from "../components/CartButton"

export default function ProductCatalog() {
    const { fragrances, loading, error } = useFragrances()

    return (
        <>
            <NavBar />
            <h1>Productos</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && fragrances &&
                fragrances.map(product => {
                    return (
                        <>
                            <ProductList fragrance={product} />
                            <CartButton
                                product={product} />
                        </>
                    )
                })}
            <Footer />
        </>
    )
}
