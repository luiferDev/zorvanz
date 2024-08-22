import { NavBar } from "../components/NavBar"
import Footer from "../UI/Footer"
import '../styles/about.css'

export default function About() {
    return (
        <>
            <NavBar />
            <section id="about__us">
                <header>
                    <h1>Nuestra Historia</h1>
                </header>

                <article>
                    <p>Zorvanz es más que una marca de fragancias; es una invitación a descubrir tu esencia única. Desde nuestros inicios, nos hemos dedicado a crear experiencias olfativas personalizadas que reflejan la individualidad de cada persona.</p>
                </article>

                <section id="mission-vision-values">
                    <header>
                        <h2>Misión</h2>
                    </header>
                    <p>Nuestra misión es transformar la manera en que las personas perciben y experimentan las fragancias, ofreciendo productos personalizados que capturan la esencia de cada individuo.</p>

                    <header>
                        <h2>Visión</h2>
                    </header>
                    <p>Aspiramos a ser la marca líder en personalización de fragancias, expandiendo nuestra presencia globalmente mientras mantenemos un compromiso firme con la calidad y la sostenibilidad.</p>

                    <header>
                        <h2>Valores</h2>
                    </header>
                    <p>En Zorvanz, valoramos la autenticidad, la creatividad y el cuidado en cada detalle. Nos dedicamos a ofrecer productos que no solo huelen bien, sino que también reflejan los valores y la personalidad de nuestros clientes.</p>
                </section>

                <section id="history">
                    <header>
                        <h2>Historia</h2>
                    </header>
                    <p>Fundada en [Año], Zorvanz nació de la pasión por los aromas y la necesidad de ofrecer algo más que un perfume genérico. Desde el primer día, nos hemos enfocado en la personalización y en la creación de productos que resuenen profundamente con nuestros clientes.</p>
                </section>

                <section id="products">
                    <header>
                        <h2>Productos</h2>
                    </header>
                    <p>Ofrecemos una amplia gama de perfumes, velas aromáticas y productos relacionados con el cuidado personal. Cada uno de nuestros productos se crea con esmero y dedicación, asegurando que cada fragancia sea tan única como quien la lleva.</p>
                </section>

                <section id="quality-commitment">
                    <header>
                        <h2>Compromiso con la Calidad</h2>
                    </header>
                    <p>En Zorvanz, cada fragancia es sometida a rigurosos controles de calidad para garantizar que solo los mejores ingredientes lleguen a nuestros clientes.</p>
                </section>

                <section id="personalization">
                    <header>
                        <h2>Personalización</h2>
                    </header>
                    <p>Creemos que las fragancias deben ser tan únicas como las personas que las usan. Es por eso que ofrecemos un proceso de personalización que permite a nuestros clientes diseñar su aroma ideal.</p>
                </section>

                <section id="sustainability">
                    <header>
                        <h2>Sostenibilidad</h2>
                    </header>
                    <p>Nos comprometemos a utilizar ingredientes sostenibles y prácticas responsables en la creación de nuestros productos, para que puedas disfrutar de tus fragancias con la tranquilidad de saber que estás cuidando el planeta.</p>
                </section>

                <section id="testimonials">
                    <header>
                        <h2>Testimonios</h2>
                    </header>
                    <blockquote>
                        <p>"Zorvanz no es solo un perfume, es una experiencia olfativa única que me acompaña todos los días." - Cliente Satisfecho</p>
                    </blockquote>
                </section>

                <section id="call-to-action">
                    <header>
                        <h2>Llamada a la Acción</h2>
                    </header>
                    <p>Descubre el aroma que te define. Explora nuestra colección o personaliza tu fragancia hoy mismo. ¡Únete a la comunidad Zorvanz!</p>
                </section>
            </section>
            <Footer />
        </>

    )
}
