import { Texts } from '../components/texts';
import '../components/styles/products.css'
import { useFragrances } from '../hooks/useFragrances';

export function Products() {
    const { fragrances, loading, error } = useFragrances();

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
                            <section key={f.id} className='card__container'>
                                <img src={f.image} alt={f.product_name} />
                                <div className='li'>
                                    <li><h3>{f.product_name}</h3></li>
                                    <li><strong>Precio: </strong>${f.price}</li>
                                    <li><strong>Popularidad: </strong> {f.popularity}</li>
                                </div>
                            </section>
                        ))}
                    </ul>
                    <div className='container__btn'>
                        <a href="#" className='more__btn'>ver más</a>
                    </div>
                </>
            )}
        </>
    )
}