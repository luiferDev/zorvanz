import { Texts } from '../components/texts'
import '../styles/products.css'
import { useFragrances } from '../hooks/useFragrances'
import { Link } from 'react-router-dom'
import CartButton from '../components/CartButton'

export function Products() {

    const { fragrances, loading, error } = useFragrances()

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
                        {fragrances.map(product => {
                            return (
                                //<Link className='link' to={`/product-catalog/${f.id}`} key={f.id}>
                                <section key={product.id} className='card__container'>
                                    <img src={product.imageUrl} alt={product.name} />
                                    <div className='li'>
                                        <h3>{product.name}</h3>
                                        <p>{product.category.categoryName}</p>
                                    </div>
                                    <div className='card__footer'>
                                        <p className='price'>${product.price}</p>
                                        <CartButton product={product} />
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