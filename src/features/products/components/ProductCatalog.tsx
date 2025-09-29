import { NavBar } from '../../../components/NavBar'
import Footer from '../../../UI/Footer'
import ProductList from '../UI/ProductList'
import Header from '../../../components/Header'

export default function ProductCatalog() {
    return (
        <>
            <NavBar />
            <h1 className="pt-40 pb-8 pl-12 text-5xl">Nuestros Productos</h1>
            <div className="lg:flex lg:flex-row lg:pt-4 lg:mr-8 lg:space-x-8 lg:my-12">
                <aside className="lg:w-[30%] lg:pt-4 lg:sticky">
                    <Header />
                </aside>
                <main className="lg:grid lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:gap-10 lg:w-[100%] lg:mt-4">
                    <ProductList />
                </main>
            </div>
            <Footer />
        </>
    )
}
