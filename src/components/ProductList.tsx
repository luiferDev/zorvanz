import { Link } from 'react-router-dom'
import { Fragrance } from '../types/interfaces'

interface FragranceList {
    fragrance: Fragrance
}

export default function ProductList({fragrance}: FragranceList) {
    return (
        <main>
            <Link className='link'
                to={`/product-catalog/${fragrance.id}`}
                key={fragrance.id}>
                <article>
                    <img src={fragrance.imageUrl} alt={fragrance.name} />
                    <h3>{fragrance.name}</h3>
                    <p>{fragrance.description}</p>
                    <p>{fragrance.category.categoryName}</p>
                    <p>{fragrance.price}</p>
                </article>
            </Link>
        </main>
    )
}
