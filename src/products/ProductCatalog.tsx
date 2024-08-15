import { NavBar } from "../components/NavBar";
import Footer from "../UI/Footer";
import { Products } from "../UI/Products";


export default function ProductCatalog() {
    return (
        <>
            <NavBar />
            {/* Aqui va el contenido de la pagina */}
            <h1>Productos</h1>
            <Products />
            <Footer />
        </>
    )
}
