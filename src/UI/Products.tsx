import { Texts } from '../components/texts'
import { NavLink } from 'react-router'
import CartButton from '../components/CartButton'
import { motion } from 'framer-motion'
import { useFetchProducts } from '../hooks/useProducts'
import { SkeletonCard } from './SkeletonCard'
import { useAuthStore } from '../store/auth'

export function Products() {
	const pageSize = 4
    const { data, isLoading, isError } = useFetchProducts(pageSize)
    const profile = useAuthStore((state) => state.profile)
    const isAdmin = profile?.role === 'Admin'

    if (isLoading)
        return (
            <>
                <div className="flex flex-row justify-center items-center gap-8 pt-20 pb-8 pl-8 lg:pb-20 lg:pl-20">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </>
        )
    if (isError) return <div>Error: producto no encontrado</div>
    if (!data) return null

    return (
        <>
            <Texts
                styles="pt-20 pb-8 pl-8 lg:pb-20 lg:pl-20"
                titleStyles="text-4xl lg:text-6xl"
                bodyStyles="text-sm mt-4 w-[30ch] lg:text-2xl lg:w-[50ch]"
                subtitle="Productos Destacados"
                body="Explora nuestra gama de ambientadores y velas aromáticas. Cada uno hecho a la medida para ti."
            />

            <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 pr-12 lg:px-12 space-x-3">
                {data?.map((product) => {
                    return (
                        <section
                            key={product.id}
                            className="p-4 rounded-3xl shadow-[5px_2px_12px_2px_#e6d1dc] aspect-[4/3] w-80"
                        >
                            <motion.img
                                className="rounded-3xl aspect-[4/3] object-cover w-80 h-80"
                                whileHover={{
                                    scale: [null, 1.1],
                                    translateY: [0, -5, -4],
                                }}
                                transition={{ duration: 0.3 }}
                                src={product.imageUrl}
                                alt={product.name}
                            />
                            <div className="list-none text-sm w-full flex flex-col items-start lg:text-base">
                                <h3 className="text-2xl mt-2.5 mb-2.5">
                                    {product.name}
                                </h3>
                                <p className="text-base">
                                    {product.category.categoryName}
                                </p>
                            </div>
                            <div className="flex flex-row justify-between mt-14 pt-3.5 border-t border-solid border-[#7e6d6d]">
                                <p className="text-3xl font-bold">
                                    ${product.price}
                                </p>
                                <CartButton product={product} />
                            </div>
                            {isAdmin && (
                                <div className="flex justify-end mt-4">
                                    <NavLink
                                        to={`/update-product/${product.id}`}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                                    >
                                        Actualizar
                                    </NavLink>
                                </div>
                            )}
                        </section>
                    )
                })}
            </ul>
            <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex justify-center pt-20 pb-20 cursor-pointer"
            >
                <NavLink
                    to="/product-catalog"
                    className="flex items-center text-center justify-center font-ageo text-base rounded-3xl w-32 h-9 border-none bg-zorvanz-red text-zorvanz-beige lg:w-64 lg:h-16 lg:text-2xl"
                >
                    ver más
                </NavLink>
            </motion.div>
        </>
    )
}
