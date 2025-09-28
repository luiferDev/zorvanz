import { motion } from 'framer-motion'
import CarouselBackground from '../components/Carrousel'
import { Link } from 'react-router'

export default function Hero() {
    return (
        <>
            <CarouselBackground>
                <div className="lg:ml-24 lg:flex lg:justify-between lg:items-center">
                    <div className="text-zorvanz-beige ">
                        <h1
                            data-cy="hero-title"
                            className="pt-96 pr-4 pl-8 text-[40px] font-[Ageo] lg:mt-[-50px] lg:text-8xl lg:w-[12ch]"
                        >
                            Personaliza tu Aroma
                        </h1>
                        <p
                            data-cy="hero-text"
                            className="font-[Vanio] italic w-[45ch] text-[12px] pt-4 pl-8 lg:text-2xl lg:w-[45ch]"
                        >
                            Descubre tu aroma único con nuestras fragancias
                            exclusivas. Personaliza cada detalle y dale un toque
                            personal a tu entorno.
                        </p>
                    </div>
                    <motion.button
                        data-cy="hero-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                        }}
                        className="w-[125px] h-9 rounded-3xl font-[Ageo] text-xs bg-zorvanz-red text-zorvanz-beige border-0 mt-8 ml-8 cursor-pointer lg:mt-80 lg:mr-24  lg:w-64 lg:h-16 lg:text-2xl"
                    >
                        <Link to={'/product-catalog'}>Comprar Ahora</Link>
                    </motion.button>
                </div>
            </CarouselBackground>
        </>
    )
}
