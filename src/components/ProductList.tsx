import { Link } from 'react-router-dom'
import { useFragrances } from '../hooks/useFragrances'
import CartButton from './CartButton'
import { useFilters } from '../hooks/useFilters'
import '../styles/productList.css'

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
                                <p>Stock: {product.stock}</p>
                            </article>
                        </Link>
                        <div className='add__cart__product'>
                            <CartButton product={product} />
                        </div>
                        
                    </>
                ))
            }
        </main>
    )
}
