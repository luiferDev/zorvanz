import { Link } from 'react-router-dom'
import { useFragrances } from '../hooks/useFragrances-copy'
import CartButton from './CartButton'
import { useFilters } from '../hooks/useFilters'
import '../styles/productList.css'
import { motion } from 'framer-motion'

export default function ProductList() {

    const { fragrances, loading, error } = useFragrances()
    const { filterProducts } = useFilters()
    const filteredFragrances = filterProducts(fragrances)

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && fragrances &&
                filteredFragrances.map(product => (
                    <div className='product__container' key={product.id}>
                        <Link className='link'
                            to={`/product-catalog/${product.id}`}>
                            <article className='product__list'>
                                <motion.img
                                    whileHover={{ scale: [null, 1.1], translateY: [0, -5, -4] }}
                                    transition={{ duration: 0.3 }}
                                    src={product.imageUrl} alt={product.name}
                                    className='product__img' />

                                <div className='info__container'>
                                    <h3 className='product__title'>{product.name}</h3>
                                    {/* <p>{product.description}</p> */}
                                    <p>
                                        {product.category.categoryName}
                                    </p>
                                    {
                                        product.stock === 0
                                            ? <strong className='no__stock'>Producto Agotado</strong>
                                            : <strong className='stock'>Disponible</strong>
                                    }
                                </div>
                            </article>
                        </Link>
                        <div>
                            <hr className='product__hr' />
                            <div className='add__cart__product'>
                                <p>${product.price}</p>
                                <CartButton product={product} />
                            </div>

                        </div>
                    </div>
                ))
            }
        </>
    )
}
