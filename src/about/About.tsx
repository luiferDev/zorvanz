import { NavBar } from "../components/NavBar"
import Footer from "../UI/Footer"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings2 } from '../components/settings/sliderSettings'
import '../styles/about.css'
import { Link } from "react-router-dom"

export default function About() {
    return (
        <>
            <NavBar />
            <section id="about__us">
                <section id="hero">
                    <header>
                        <h1>Nuestra Historia</h1>
                        <article>
                            <p>Zorvanz es más que una marca de fragancias; es una invitación a descubrir tu esencia única. Desde nuestros inicios, nos hemos dedicado a crear experiencias olfativas personalizadas que reflejan la individualidad de cada persona.</p>
                        </article>
                    </header>
                    <img src="/zorvanzAbout.jpg" alt="imagen de una mujer con unos perfumes" />
                </section>

                <section id="mission">
                    <div>
                        <img src="/mission.jpg" alt="imagen de una fragancia" />
                        <header>
                            <h2>Misión</h2>
                            <p>Queremos ser un líder en la industria de las fragancias, ofreciendo productos naturales y respetuosos con el medio ambiente y la piel. Se enfocan en crear aromas que no solo agraden a los sentidos, sino que también promuevan el bienestar del planeta y de los usuarios, buscando inspirar amor y lealtad en cada experiencia con sus fragancias.</p>
                        </header>
                    </div>

                </section>
                <section id="vision">

                    <header>
                        <h2>Visión</h2>
                        <p>Queremos ser un líder global en fragancias y perfumes, exportando sus productos al extranjero. A futuro, desea mantenerse fiel a sus valores de innovación, integridad, transparencia, honestidad, enfoque en el cliente y calidad. La visión es ser reconocida internacionalmente por priorizar el bienestar, la seguridad, la comodidad y la satisfacción de sus clientes.</p>
                    </header>

                    <img src="/mujerEnELCampo.jpg" alt="imagen de una mujer en un campo" />
                </section>

                <section id="values">
                    <header>
                        <h2>Nuestros Valores</h2>
                    </header>
                    <article>

                        <div>
                            <img src="/amorIcon.png" alt="una mano con un corazon" />
                            <h2>Amor</h2>
                            <p>Transmitimos el amor con el que creamos nuestros productos, enfocándonos en satisfacer al cliente y en el progreso de nuestra empresa, con la satisfacción del cliente como objetivo principal.</p>
                        </div>

                        <div>
                            <img src="/honestyIcon.png" alt="una mano tocando un corazon" />
                            <h2>Honestidad</h2>
                            <p>Zorvanz venderá productos basados en la honestidad, reflejando lo que promete y priorizando la integridad y el respeto, fundamentales para la reputación de la empresa.</p>
                        </div>

                        <div>
                            <img src="/innovationIcon.png" alt="una cabeza con un bombillo en el medio" />
                            <h2>Innovación</h2>
                            <p>Zorvanz se distingue por su innovación, creando fragancias personalizadas que promueven la comodidad del cliente, diferenciándose de las compañías comunes de perfumes.</p>
                        </div>

                        <div>
                            <img src="/optimismIcon.png" alt="una cabeza con un sol en la nuca" />
                            <h2>Optimismo</h2>
                            <p>Zorvanz se caracterizará por su optimismo, resiliencia y fortaleza, manteniendo una perspectiva positiva y aprendiendo de cada experiencia para asegurar el desarrollo continuo de la empresa.</p>
                        </div>

                    </article>

                </section>

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

                
<section id="testimonials">
                    <header>
                        <h2>Testimonios</h2>
                    </header>
                    <Slider {...settings2}>
                        <blockquote>
                            <p>"Zorvanz no es solo un perfume, es una experiencia olfativa única que me acompaña todos los días."  Cliente Satisfecho</p>
                        </blockquote>
                        <blockquote>
                            <p>"Zorvanz no es solo un perfume, es una experiencia olfativa única que me acompaña todos los días."  Cliente Satisfecho</p>
                        </blockquote>
                        <blockquote>
                            <p>"Zorvanz no es solo un perfume, es una experiencia olfativa única que me acompaña todos los días."  Cliente Satisfecho</p>
                        </blockquote>
                        <blockquote>
                            <p>"Zorvanz no es solo un perfume, es una experiencia olfativa única que me acompaña todos los días."  Cliente Satisfecho</p>
                        </blockquote>
                    </Slider>
                </section>

                <section id="team">
                    <header>
                        <h2>Nuestro Equipo</h2>
                    </header>
                    <section>
                        <div>
                            <img className="avatar" src="/avatar.jpg" alt="imagen de una mujer de negocios" />
                            <h2>Angelly Cruz</h2>
                            <h3>Gerente General</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum, ex eaque sint laboriosam repellendus facere maiores quod error consectetur sunt at magnam suscipit fuga laudantium quam molestiae incidunt doloribus, odit quis ipsam eius dolorum!</p> */}
                        </div>
                        <div>
                            <img className="avatar" src="/avatar.jpg" alt="imagen de una mujer de negocios" />
                            <h2>Mariangel Calderón</h2>
                            <h3>Gerente administrativa</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum, ex eaque sint laboriosam repellendus facere maiores quod error consectetur sunt at magnam suscipit fuga laudantium quam molestiae incidunt doloribus, odit quis ipsam eius dolorum!</p> */}
                        </div>
                        <div>
                            <img className="avatar" src="/avatar.jpg" alt="imagen de una mujer de negocios" />
                            <h2>Mariana Calderón</h2>
                            <h3>Gerente de recursos humanos</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum, ex eaque sint laboriosam repellendus facere maiores quod error consectetur sunt at magnam suscipit fuga laudantium quam molestiae incidunt doloribus, odit quis ipsam eius dolorum!</p> */}
                        </div>
                        <div>
                            <img className="avatar" src="/avatar.jpg" alt="imagen de una mujer de negocios" />
                            <h2>Vanessa Barrera</h2>
                            <h3>Gerente de seguridad y salud en el trabajo</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum, ex eaque sint laboriosam repellendus facere maiores quod error consectetur sunt at magnam suscipit fuga laudantium quam molestiae incidunt doloribus, odit quis ipsam eius dolorum!</p> */}
                        </div>
                        <div>
                            <img className="avatar" src="/avatar.jpg" alt="imagen de una mujer de negocios" />
                            <h2>Nicolle Bedoya</h2>
                            <h3>Gerente de Marketing</h3>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum, ex eaque sint laboriosam repellendus facere maiores quod error consectetur sunt at magnam suscipit fuga laudantium quam molestiae incidunt doloribus, odit quis ipsam eius dolorum!</p> */}
                        </div>
                    </section>

                </section>
{/* 
                <section id="sustainability">
                    <header>
                        <h2>Sostenibilidad</h2>
                    </header>
                    <p>Nos comprometemos a utilizar ingredientes sostenibles y prácticas responsables en la creación de nuestros productos, para que puedas disfrutar de tus fragancias con la tranquilidad de saber que estás cuidando el planeta.</p>
                </section> */}

                <section id="call-to-action">
                    <header>
                        <h2>Entérate de nuestra experiencia</h2>
                    </header>
                    <p>Descubre el aroma que te define. Explora nuestra colección o personaliza tu fragancia hoy mismo. ¡Observa todo lo que ofrece Zorvanz!</p>
                    <Link className='more__btn' to="/product-catalog">
                        Productos
                    </Link>
                </section>
            </section>
            <Footer />
        </>

    )
}
