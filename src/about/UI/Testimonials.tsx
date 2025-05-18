import Slider from 'react-slick'
import { settings2 } from '../../components/settings/sliderSettings'
import { testimonials } from '../../hooks/constants'

export default function Testimonials() {
    return (
        <section className="flex flex-col justify-center gap-12 m-12">
            <header className="w-full text-center gap-4">
                <h2 className="text-5xl">Testimonios</h2>
            </header>
            <Slider {...settings2}>
                {testimonials.map((testimonial) => (
                    <blockquote
                        key={testimonial.id}
                        className="h-[45vh] lg:h-[30vh] flex flex-col justify-center items-center text-center"
                    >
                        <p className="text-2xl text-center my-8 mx-4 lg:text-4xl">
                            {testimonial.text}
                        </p>
                        <strong className="text-2xl text-center m-8">
                            {testimonial.author}
                        </strong>
                    </blockquote>
                ))}
            </Slider>
        </section>
    )
}
