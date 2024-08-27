import { motion } from 'framer-motion'
import CarouselBackground from '../components/Carrousel'
import '../styles/styles.css'

export default function Hero() {
    return (
        <>
            <CarouselBackground >
                <div className="hero">
                    <div className='hero__text'>
                        <h1 className='hero__title'>Personaliza tu Aroma</h1>
                        <p className='hero__body'>Descubre tu aroma único con nuestras fragancias exclusivas. Personaliza cada detalle y dale un toque personal.</p>
                    </div>
                    <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className='cta__hero__btn'>Comprar Ahora</motion.button>
                </div>
            </CarouselBackground >
        </>

    )
}