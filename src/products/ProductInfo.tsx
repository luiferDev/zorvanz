import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { useFragrances } from "../hooks/useFragrances"
import Footer from "../UI/Footer"
import { Fragrance } from "../types/interfaces"


export default function ProductInfo() {

    const { id } = useParams()
    const { fragrances, loading, error } = useFragrances()
    const selectedProduct: Fragrance | undefined = fragrances.find(f => f.id === id)

    return (
        <>
            <NavBar />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && (
                <div>
                    <div>
                        <h1>{selectedProduct?.name}</h1>
                        <img src={selectedProduct?.imageUrl} alt={selectedProduct?.name} />
                        <p>{selectedProduct?.description}</p>
                        <p>Price: ${selectedProduct?.price}</p>
                        <p>Rating: {selectedProduct?.popularity}</p>
                        <p>Stock: {selectedProduct?.stock} unidades</p>
                        <p>Category: {selectedProduct?.category.categoryName}</p>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}
