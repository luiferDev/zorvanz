import { useParams } from 'react-router'
import { NavBar } from '../../../components/NavBar'

import Footer from '../../../UI/Footer'
import CartButton from '../UI/CartButton'
import { useFetchProductById } from '../hooks/useProducts'
import { Suspense } from 'react'
import { SkeletonCard } from '../../../UI/SkeletonCard'
import BackButton from '../../../UI/back-button'

export default function ProductInfo() {
    const { id } = useParams()
    const Id = id?.toString()
    const { data, isLoading, isError } = useFetchProductById(Id!)

    if (isLoading) return <SkeletonCard />
    if (isError) return <div>Error: producto no encontrado</div>
    if (!data) return <div>Producto no encontrado</div>

    return (
        <>
            <NavBar />
            <Suspense fallback={<SkeletonCard />}>
                <BackButton />
                {data && (
                    <div className="flex flex-col justify-center py-8 px-8 bg-white mx-4 items-center mt-24 mb-5 lg:py-12 lg:px-20 rounded-xl lg:mt-38">
                        <div
                            className="flex flex-col justify-center items-center mb-5 lg:flex-row"
                            key={data?.id}
                        >
                            <img
                                className="w-full lg:w-md lg-h-md lg:mr-14 rounded-2xl"
                                src={data?.imageUrl}
                                alt={data?.name}
                            />
                            <div className="flex flex-col w-full mt-4 justify-start items-start lg:mt-0 lg:relative lg:-top-16 lg:w-[50ch]">
                                <h1 className="text-4xl mb-2">{data?.name}</h1>
                                <p className="mb-4 text-blue-900">
                                    {data?.category.categoryName}
                                </p>
                                <p className="text-base mb-4">
                                    {data?.description}
                                </p>
                                <p
                                    className={`mb-1 ${
                                        data?.stock > 1
                                            ? 'text-emerald-600'
                                            : 'text-red-600'
                                    }`}
                                >
                                    {' '}
                                    {data?.stock > 1
                                        ? 'Disponible'
                                        : 'No Disponible'}
                                </p>
                                <p className="mb-1">Precio: ${data?.price}</p>
                                <p className="mb-4">
                                    puntuación: {data?.popularity}
                                </p>
                                <CartButton product={data} />
                            </div>
                        </div>
                    </div>
                )}
            </Suspense>

            <Footer />
        </>
    )
}
