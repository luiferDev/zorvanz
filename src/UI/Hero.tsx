import { motion } from 'framer-motion'
import CarouselBackground from '../components/Carrousel'

export default function Hero() {
    return (
        <>
            <CarouselBackground>
                <div className="lg:ml-24 lg:flex lg:justify-between lg:items-center">
                    <div className="text-[#e6e1dc] ">
                        <h1 className="pt-96 pr-4 pl-8 text-[40px] font-[Ageo] lg:mt-[-50px] lg:text-8xl lg:w-[12ch]">
                            Personaliza tu Aroma
                        </h1>
                        <p className="font-[Vanio] italic w-[45ch] text-[12px] pt-4 pl-8 lg:text-2xl lg:w-[45ch]">
                            Descubre tu aroma único con nuestras fragancias
                            exclusivas. Personaliza cada detalle y dale un toque
                            personal.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                        }}
                        className="w-[125px] h-9 rounded-3xl font-[Ageo] text-xs bg-[#701C1C] text-[#e6e1dc] border-0 mt-8 ml-8 cursor-pointer lg:mt-80 lg:mr-24  lg:w-64 lg:h-16 lg:text-2xl"
                    >
                        Comprar Ahora
                    </motion.button>
                </div>
            </CarouselBackground>
        </>
    )
}