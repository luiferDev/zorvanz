import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"

import Footer from "../UI/Footer"
import { Product } from "../types/interfaces"
import CartButton from "../components/CartButton"
import { useFetchProducts } from "../hooks/useProducts"


export default function ProductInfo() {

    const { id } = useParams()
    const numericId = Number(id)
    const { data, isLoading, isError } = useFetchProducts()
    const selectedProduct: Product | undefined = data?.find(f => f.id === numericId)

    console.log(selectedProduct?.id)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: producto no encontrado</div>;
    if (!selectedProduct) return <div>Producto no encontrado</div>;

    return (
        <>
            <NavBar />
            {selectedProduct && (
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
