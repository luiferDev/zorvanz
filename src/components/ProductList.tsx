import { Link, NavLink } from 'react-router'
import CartButton from './CartButton'
import { useFilters } from '../hooks/useFilters'
import { motion } from 'framer-motion'
import { useDeleteProduct, useFetchProducts } from '../hooks/useProducts'
import { useAuthStore } from '../store/auth'

export default function ProductList() {
    const pageSize = 12
    const { data, isLoading, isError } = useFetchProducts(pageSize)
    const profile = useAuthStore((state) => state.profile)
    const isAdmin = profile?.role === 'Admin'
	const { filterProducts } = useFilters()
	const { mutate, isPending, isSuccess } = useDeleteProduct()

	const handleDelete = (productName: string, productId: string) => {
        // Confirmación del usuario (Buena práctica UX)
        if (
            window.confirm(
                `¿Estás seguro de que quieres borrar el producto: "${productName}"?`,
            )
        ) {
            // 3. Llama a 'mutate' y pasa el 'id' como argumento.
            // Este 'id' será el valor que reciba 'deleteProductRequest'
            mutate(productId)
        }
    }


    if (isLoading) return <div>Loading...</div>
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
                        <hr className="w-4/5 border ml-8 border-solid border-[black]" />
                        <div className="flex flex-row justify-between mt-4 pt-0 pb-8 px-8 items-stretch mx-6">
                            <p className="text-[2rem] font-[bold]">
                                ${product.price}
                            </p>
                            <CartButton product={product} />
                            {isAdmin && (
                                <>
                                    <div className="flex justify-end mt-4">
                                        <NavLink
                                            to={`/update-product/${product.id}`}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                                        >
                                            Actualizar
                                        </NavLink>
									</div>
									{isSuccess && (
                                        <div className="text-green-500">
                                            Producto eliminado correctamente
                                        </div>
                                    )}
                                    <div className="flex justify-end mt-4">
                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    product.name,
                                                    product.id,
                                                )
                                            }
                                            disabled={isPending}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                                        >
                                            {isPending
                                                ? 'Borrando...'
                                                : 'Eliminar'}
                                        </button>
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
