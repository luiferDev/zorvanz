import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { useFragrances } from "../hooks/useFragrances-copy"
import Footer from "../UI/Footer"
import { Fragrance } from "../types/interfaces"
import CartButton from "../components/CartButton"


export default function ProductInfo() {

    const { id } = useParams()
    const numericId = Number(id)
    const { fragrances, loading, error } = useFragrances()
    const selectedProduct: Fragrance | undefined = fragrances?.find(f => f.id === numericId)

    console.log(selectedProduct?.id)

    return (
        <>
            <NavBar />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && !selectedProduct && (
                <div>Producto no encontrado</div>
            )}
            {!loading && !error && selectedProduct && (
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
                    <CartButton product={selectedProduct} />
                </div>
            )}
            <Footer />
        </>
    )
}
