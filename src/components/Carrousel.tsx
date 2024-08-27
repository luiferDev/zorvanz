import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import '../styles/carrousel.css' // Archivo CSS para estilos adicionales
import useImageSize from '../hooks/useImageSize'
import { Autoplay } from 'swiper/modules'

function CarouselBackground({ children }: React.PropsWithChildren) {
    const images: string[] = useImageSize()

    return (
        <div className="carousel-background">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true} // Hacer que el carrusel sea infinito
                
                autoplay={{
                    delay: 2000, // 3 segundos entre cada slide
                    disableOnInteraction: false, // Continuar el autoplay después de la interacción
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="carousel-image"
                            style={{ backgroundImage: `url(${image})` }}>
                            {children}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CarouselBackground

