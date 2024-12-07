import Slider from 'react-slick'
import { settings2 } from '../../components/settings/sliderSettings'

export default function Testimonials() {
    return (
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
    )
}
