import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/carrousel.css'// Archivo CSS para estilos adicionales
import useImageSize from '../hooks/useImageSize'
import { settings } from '../components/settings/sliderSettings'

function CarouselBackground({ children }: React.PropsWithChildren) {
    const images: string[] = useImageSize()

    return (
        <div className="static top-0 left-0 w-full h-full overflow-hidden -z-10">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div
                            className="w-full h-[100dvh] bg-cover bg-center bg-no-repeat bg-blend-darken bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(0,0,0,1)_100%)]"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            {children}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselBackground
