import Menu from "../components/menu";
import { NavBar } from "../components/NavBar";
import Footer from "../UI/Footer";


export default function ProductCatalog() {
    return (
        <>
            <Menu />
            <NavBar />
            {/* Aqui va el contenido de la pagina */}
            <h1>Productos</h1>
            <Footer />
        </>
    )
}
