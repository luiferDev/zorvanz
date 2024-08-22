import { NavBar } from "../components/NavBar"
import Footer from "../UI/Footer"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import { FiltersProvider } from "../context/filterProducts"

export default function ProductCatalog() {

    return (
        <FiltersProvider >
            <>
                <NavBar />
                <aside>
                    <Header />
                </aside>
                <h1>Productos</h1>
                <main>
                    <ProductList />
                </main>
                <Footer />
            </>
        </FiltersProvider>
    )
}
