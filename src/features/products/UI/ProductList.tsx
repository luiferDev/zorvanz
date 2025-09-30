import { Link, NavLink } from 'react-router'
import CartButton from './CartButton'
import { useFilters } from '../hooks/useFilters'
import { motion } from 'framer-motion'
import { useDeleteProduct, useGetProducts } from '../hooks/useProducts'
import { useAuthStore } from '../../../store/auth'
import { createDeleteHandler } from '../utils/delete'
import SkeletonProducts from './SkeletonProducts'
import { Modal } from './Modal'

export default function ProductList() {
    const pageSize = 12
    const { data, isLoading, isError } = useGetProducts(pageSize)
    const profile = useAuthStore((state) => state.profile)
    const isAdmin = profile?.role === 'Admin'
    const { filterProducts } = useFilters()
    const { mutate, isPending, isSuccess } = useDeleteProduct()
    const handleDelete = createDeleteHandler({ mutate })

    if (isLoading) return <SkeletonProducts />
    if (isError) return <div>Error: producto no encontrado</div>
    if (!data) return null

    const filteredProducts = filterProducts(data)

    return (
        <>
            {filteredProducts.map((product) => (
                <div
                    className="bg-white shadow-[3px_3px_3px_3px_black] m-4 rounded-3xl 
					border-solid lg:m-0 w-80"
                    key={product.id}
                >
                    <Link
                        className="link"
                        to={`/product-catalog/${product.id}`}
                    >
                        <article className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-0 mb-8 mx-4">
                            <motion.img
                                whileHover={{
                                    scale: [null, 1.1],
                                    translateY: [0, -5, -4],
                                }}
                                transition={{ duration: 0.3 }}
                                src={product.imageUrl || '/default-image.jpg'}
                                alt={product.name || 'Producto'}
                                className="aspect-[4/3] w-80 h-80 pt-4 pb-0 px-0 rounded-2xl"
                            />
                            <div className="px-4 py-0">
                                <h3 className="text-[1.65rem] mt-0 mb-4 mx-0">
                                    {product.name}
                                </h3>
                                <p className="text-xl pb-2.5">
                                    {product.category?.categoryName ||
                                        'Sin categoría'}
                                </p>
                                {product.stock === 0 ? (
                                    <strong>Producto Agotado</strong>
                                ) : (
                                    <strong>Disponible</strong>
                                )}
                            </div>
                        </article>
                    </Link>
                    <div>
                        <hr className="w-4/5 border ml-8 border-solid border-black" />
                        <div className="flex flex-row gap-4 justify-between mt-4 pt-0 pb-8 px-8 items-center">
                            <p className="text-3xl font-bold">
                                ${product.price}
                            </p>
                            {!isAdmin && <CartButton product={product} />}
                            {isAdmin && (
                                <>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <NavLink
                                            to={`/update-product/${product.id}`}
                                            className="bg-zorvanz-blue hover:bg-blue-800 text-white px-4 py-2.5 rounded-lg text-[14px]"
                                        >
                                            Actualizar
                                        </NavLink>

                                        <Modal
                                            productName={product.name}
                                            id={product.id}
                                            onMutate={handleDelete}
											isPending={isPending}
											onSuccess={isSuccess}
                                        /> 
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
