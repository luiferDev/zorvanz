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
        <>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && fragrances &&
                filteredFragrances.map(product => (
                    <div className='product__container' key={product.id}>
                        <Link className='link'
                            to={`/product-catalog/${product.id}`}>
                            <article className='product__list'>
                                <img className='product__img'
                                    src={product.imageUrl} alt={product.name} />
                                <div className='info__container'>
                                    <h3 className='product__title'>{product.name}</h3>
                                    <p><strong>Descripcion: </strong>{product.description}</p>
                                    <p><strong>Categoría: </strong>{product.category.categoryName}</p>
                                    <p><strong>Precio: </strong>${product.price}</p>
                                    {
                                        product.stock === 0 && 
                                        <strong className='no__stock'>Producto Agotado</strong> || 
                                        <strong className='stock'>Disponible</strong>
                                    }
                                </div>
                            </article>
                        </Link>
                        <div className='add__cart__product'>
                            <CartButton product={product} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}
