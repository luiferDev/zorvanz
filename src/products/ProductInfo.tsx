import { useParams } from "react-router-dom"
import { NavBar } from "../components/NavBar"

import Footer from "../UI/Footer"
import { Product } from "../types/interfaces"
import CartButton from "../components/CartButton"
import { useFetchProducts } from "../hooks/useProducts"

import '../styles/product-info.css'


export default function ProductInfo() {

    const { id } = useParams()
    const numericId = Number(id)
    const { data, isLoading, isError } = useFetchProducts()
    const selectedProduct: Product | undefined = data?.find(f => f.id === numericId)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: producto no encontrado</div>;
    if (!selectedProduct) return <div>Producto no encontrado</div>;

    return (
        <>
            <NavBar />
            {selectedProduct && (
                <div className="info">
                    <div className="info__product" key={selectedProduct?.id}>
                        <img className="info__img" 
                            src={selectedProduct?.imageUrl} 
                            alt={selectedProduct?.name} />
                        <div className="info__details">
                            <h1>{selectedProduct?.name}</h1>
                            <p className="info__description">{selectedProduct?.description}</p>
                            <p className="info__price">Price: ${selectedProduct?.price}</p>
                            <p className="info__popularity">Rating: {selectedProduct?.popularity}</p>
                            <p className="info__stock">Stock: {selectedProduct?.stock} unidades</p>
                            <p className="info__category">Category: {selectedProduct?.category.categoryName}</p>
                            <CartButton product={selectedProduct} />
                        </div>
                    </div>
                    
                </div>
            )}
            <Footer />
        </>
    )
}
