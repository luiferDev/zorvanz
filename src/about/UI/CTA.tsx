import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section id="call-to-action">
            <header>
                <h2>Entérate de nuestra experiencia</h2>
            </header>
            <p>Descubre el aroma que te define. Explora nuestra colección o personaliza tu fragancia hoy mismo. ¡Observa todo lo que ofrece Zorvanz!</p>
            <Link className='more__btn' to="/product-catalog">
                Productos
            </Link>
        </section>
    )
}
