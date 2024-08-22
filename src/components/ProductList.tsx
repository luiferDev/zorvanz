import { Link } from 'react-router-dom'
import { useFragrances } from '../hooks/useFragrances'
import CartButton from './CartButton'
import { useFilters } from '../hooks/useFilters'

export default function ProductList() {

    const { fragrances, loading, error } = useFragrances()
    const { filterProducts } = useFilters()
    const filteredFragrances = filterProducts(fragrances)


    return (
        <main>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && fragrances &&
                filteredFragrances.map(product => (
                    <>
                        <Link className='link'
                            to={`/product-catalog/${product.id}`}
                            key={product.id}>
                            <article>
                                <img src={product.imageUrl} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Descripcion: {product.description}</p>
                                <p>Categoría: {product.category.categoryName}</p>
                                <p>Precio: ${product.price}</p>
                            </article>
                        </Link>
                        <CartButton product={product} />
                    </>
                ))
            }
        </main>
    )
}
