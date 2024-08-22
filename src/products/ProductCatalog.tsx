import { NavBar } from "../components/NavBar"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import { FiltersProvider } from "../context/filterProducts"
import '../styles/product-catalog.css'

export default function ProductCatalog() {

    return (
        <FiltersProvider >
            <>
                <NavBar />
                <aside className="filters__product__list">
                    <Header />
                </aside>
                <h1 className="title__product__list">Productos</h1>
                <main className="product__list">
                    <ProductList />
                </main>
                <Footer />
            </>
        </FiltersProvider>
    )
}
