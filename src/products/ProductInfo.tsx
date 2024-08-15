import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Fragrance, useFragrances } from "../hooks/useFragrances"
import Footer from "../UI/Footer"


export default function ProductInfo() {

    const { id } = useParams()
    const { fragrances, loading, error } = useFragrances()
    const selectedProduct: Fragrance | undefined = fragrances.find(f => f.id === id)

    return (
        <>
            <NavBar />
            {/* Aqui va el contenido de la pagina */}
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && (
                <div>
                    <div>
                        <h1>{selectedProduct?.product_name}</h1>
                        <img src={selectedProduct?.image} alt={selectedProduct?.product_name} />
                        <p>{selectedProduct?.description}</p>
                        <p>Price: ${selectedProduct?.price}</p>
                        <p>Rating: {selectedProduct?.popularity}</p>
                        <p>Stock: {selectedProduct?.stock} 20 unidades</p>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}
