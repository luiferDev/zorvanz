import { Texts } from '../components/texts'
import '../components/styles/products.css'
import { useFragrances } from '../hooks/useFragrances'
import { Link } from 'react-router-dom'

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
                        {fragrances.map(f => (
                            <Link className='link' to={`/product-catalog/${f.id}`} key={f.id}>
                            <section key={f.id} className='card__container'>
                                <img src={f.imageUrl} alt={f.name} />
                                <div className='li'>
                                    <li><h3>{f.name}</h3></li>
                                    <li><strong>Precio: </strong>${f.price}</li>
                                    <li><strong>Popularidad: </strong> {f.popularity}</li>
                                    <li><strong>Categoria: </strong>{f.category.categoryName}</li>
                                </div>
                            </section>
                        </Link>
                        ))}
                    </ul>
                    <div className='container__btn'>
                        <Link to="/product-catalog" className='more__btn'>ver más</Link>
                    </div>
                </>
            )}
        </>
    )
}