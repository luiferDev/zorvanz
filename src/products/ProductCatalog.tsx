import { NavBar } from "../components/NavBar"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import '../styles/product-catalog.css'

export default function ProductCatalog() {

    return (
        <>
            <NavBar />
            <h1 className="title__product__list">Nuestros Productos</h1>
            <div className="product__catalog">
                <aside className="filters__product__list">
                    <Header />
                </aside>
                <main className="product__list__container">
                    <ProductList />
                </main>
            </div>
            <Footer />
        </>
    )
}
