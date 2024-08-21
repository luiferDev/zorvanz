import { Texts } from '../components/texts'
import '../components/styles/products.css'
import { useFragrances } from '../hooks/useFragrances'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { Product } from '../types/interfaces'
import CartButton from '../components/CartButton'

export function Products() {

    const { cart } = useCart()
    const { fragrances, loading, error } = useFragrances()

    const checkProductInCart = (product: Product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <>
            <Texts
                styles="text__container"
                subtitle="Productos Destacados"
                body="Explora nuestra gama de perfumes, velas y productos de cuidado personal. Cada uno hecho a la medida para ti."
            />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && (
                <>
                    <ul className='container__list'>
                        {fragrances.map(f => {
                            const isProductInCart = checkProductInCart(f)
                            return (
                                //<Link className='link' to={`/product-catalog/${f.id}`} key={f.id}>
                                <section key={f.id} className='card__container'>
                                    <img src={f.imageUrl} alt={f.name} />
                                    <div className='li'>
                                        <h3>{f.name}</h3>
                                        <p>{f.category.categoryName}</p>
                                    </div>
                                    <div className='card__footer'>
                                        <p className='price'>${f.price}</p>
                                        <CartButton
                                            isProductInCart={isProductInCart}
                                            fragrance={f} />
                                    </div>
                                </section>
                                // </Link>
                            )
                        })}
                    </ul>
                    <div className='container__btn'>
                        <Link to="/product-catalog" className='more__btn'>ver más</Link>
                    </div>
                </>
            )}
        </>
    )
}