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
                        {fragrances.map((f, index) => (
                            <section key={f.id || index} className='card__container'>
                                <img src={f.imageUrl} alt={f.name} />
                                <div className='li'>
                                    <li><h3>{f.name}</h3></li>
                                    <li><strong>Precio: </strong>${f.price}</li>
                                    <li><strong>Popularidad: </strong> {f.popularity}</li>
                                    <li>{f.category.categoryName}</li>
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