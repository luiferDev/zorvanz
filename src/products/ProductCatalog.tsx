import { NavBar } from "../components/NavBar"
import { useFragrances } from "../hooks/useFragrances"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"
import CartButton from "../components/CartButton"
import React from "react"
import Header from "../components/Header"
import { useFilters } from "../hooks/useFilters"

// interface FilterProps {
//     filter: Category | number;
//     setFilter: React.Dispatch<React.SetStateAction<Category | number>>
// }

export default function ProductCatalog() {

    const { fragrances, loading, error } = useFragrances()
    const { filterProducts } = useFilters()

    return (
        <>
            <NavBar />
            <aside>
                <Header />
            </aside>
            <h1>Productos</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && fragrances &&
                filterProducts(fragrances).map(product => (
                    <React.Fragment key={product.id}>
                        <ProductList fragrance={product} />
                        <CartButton product={product} />
                    </React.Fragment>
                ))}
            <Footer />
        </>
    )
}
