import { useParams } from 'react-router'
import { NavBar } from '../components/NavBar'

import Footer from '../UI/Footer'
import { Product } from '../types/interfaces'
import CartButton from '../components/CartButton'
import { useFetchProducts } from '../hooks/useProducts'
import { Suspense } from 'react'

export default function ProductInfo() {
    const { id } = useParams()
    const Id = id?.toString()
    const { data, isLoading, isError } = useFetchProducts()
    const selectedProduct: Product | undefined = data?.find(
        (f) => f.id.toString() === Id,
    )

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: producto no encontrado</div>
    if (!selectedProduct) return <div>Producto no encontrado</div>

    return (
        <>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
                {selectedProduct && (
                    <div className="flex flex-col justify-center py-8 px-8 bg-white mx-4 items-center mt-24 mb-5 lg:py-12 lg:px-20 rounded-xl lg:mt-38">
                        <div
                            className="flex flex-col justify-center items-center mb-5 lg:flex-row"
                            key={selectedProduct?.id}
                        >
                            <img
                                className="w-full lg:w-md lg-h-md lg:mr-14 rounded-2xl"
                                src={selectedProduct?.imageUrl}
                                alt={selectedProduct?.name}
                            />
                            <div className="flex flex-col w-full mt-4 justify-start items-start lg:mt-0 lg:relative lg:-top-16 lg:w-[50ch]">
                                <h1 className="text-4xl mb-2">
                                    {selectedProduct?.name}
                                </h1>
                                <p className="mb-4 text-blue-900">
                                    {selectedProduct?.category.categoryName}
                                </p>
                                <p className="text-base mb-4">
                                    {selectedProduct?.description}
                                </p>
                                <p
                                    className={`mb-1 ${
                                        selectedProduct?.stock > 1
                                            ? 'text-emerald-600'
                                            : 'text-red-600'
                                    }`}
                                >
                                    {' '}
                                    {selectedProduct?.stock > 1
                                        ? 'Disponible'
                                        : 'No Disponible'}
                                </p>
                                <p className="mb-1">
                                    Precio: ${selectedProduct?.price}
                                </p>
                                <p className="mb-4">
                                    puntuación: {selectedProduct?.popularity}
                                </p>
                                <CartButton product={selectedProduct} />
                            </div>
                        </div>
                    </div>
                )}
            </Suspense>

            <Footer />
        </>
    )
}
