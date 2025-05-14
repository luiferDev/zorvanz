import { Texts } from '../components/texts'
import { Link } from 'react-router-dom'
import CartButton from '../components/CartButton'
import { motion } from 'framer-motion'
import { useFetchProducts } from '../hooks/useProducts'

export function Products() {

    const { data, isLoading, isError } = useFetchProducts()

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: producto no encontrado</div>;
    if (!data) return null;

    return (
        <>
            <Texts
                styles="pt-20 pb-8 pl-8 lg:pb-20 lg:pl-20"
                titleStyles="text-4xl lg:text-6xl"
                bodyStyles="text-sm mt-4 w-[30ch] lg:text-2xl lg:w-[50ch]"
                subtitle="Productos Destacados"
                body="Explora nuestra gama de perfumes, velas y productos de cuidado personal. Cada uno hecho a la medida para ti."
            />

            <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 pr-12 lg:px-12">
                {data?.map((product) => {
                    return (
                        //<Link className='deciration-none text-black' to={`/product-catalog/${f.id}`} key={f.id}>
                        <section
                            key={product.id}
                            className="p-4 rounded-3xl shadow-[5px_2px_12px_2px_#e6d1dc] aspect-[4/3]"
                        >
                            <motion.img
                                className="rounded-3xl aspect-[4/3] object-cover"
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
                        </section>
                        // </Link>
                    )
                })}
            </ul>
            <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex justify-center pt-20 pb-20 cursor-pointer"
            >
                <Link
                    to="/product-catalog"
                    className="flex items-center text-center justify-center font-ageo text-base rounded-3xl w-32 h-9 border-none bg-[#701c1c] text-[#e6d1dc] lg:w-64 lg:h-16 lg:text-2xl"
                >
                    ver más
                </Link>
            </motion.div>
        </>
    )
}