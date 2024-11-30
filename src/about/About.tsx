import { NavBar } from "../components/NavBar"
import Footer from "../UI/Footer"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/about.css'
import Hero from "./UI/Hero"
import Mission from "./UI/Mission"
import Vision from "./UI/Vision"
import Values from "./UI/Values"
import Testimonials from "./UI/Testimonials"
import Team from "./UI/Team"
import CTA from "./UI/CTA"

export default function About() {
    return (
        <>
            <NavBar />
            <section id="about__us">
                <Hero />
                <Mission />
                <Vision />
                <Values />
                {/* <section id="history">
                    <header>
                        <h2>Historia</h2>
                    </header>
                    <p>Fundada en [Año], Zorvanz nació de la pasión por los aromas y la necesidad de ofrecer algo más que un perfume genérico. Desde el primer día, nos hemos enfocado en la personalización y en la creación de productos que resuenen profundamente con nuestros clientes.</p>
                </section> */}
                {/* 
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
                </section> */}
                <Testimonials />
                <Team />
                {/* 
                <section id="sustainability">
                    <header>
                        <h2>Sostenibilidad</h2>
                    </header>
                    <p>Nos comprometemos a utilizar ingredientes sostenibles y prácticas responsables en la creación de nuestros productos, para que puedas disfrutar de tus fragancias con la tranquilidad de saber que estás cuidando el planeta.</p>
                </section> 
                */}
                <CTA />
            </section>
            <Footer />
        </>

    )
}
