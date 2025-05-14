import { Texts } from "../components/texts"
import '../styles/features.css'
import { images } from "../hooks/constants"
import { motion } from "framer-motion"

export function Features() {
    return (
        <>
            <Texts
                styles="feature__text"
                subtitle="Nuestros Productos"
                body="Descubre las características que hacen nuestras fragancias y velas especiales."
            />
            <div className="lg:flex lg:pb-12">
                {images.map((image) => (
                    <section
						className={`flex flex-col items-center relative 
							w-full lg:h-[300px] ${image.class}`}
                        key={image.id}
                    >
                        <motion.div
                            whileHover={{ scale: [null, 1.3, 1.2] }}
                            transition={{ duration: 0.5 }}
                            className="relative w-[300px] flex flex-row gap-4 text-center rounded-3xl overflow-hidden before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-black/80"
                        >
                            <img
                                className="w-full lg:h-auto aspect-[4/3]"
                                src={image.src}
                                alt={image.alt}
                            />
                        </motion.div>
						<div className="relative text-[#e6e1dc] items-start w-4/5 
						left-9 bottom-16 ">
                            <h4 className="text-2xl">{image.title}</h4>
                            <p className="text-base">{image.body}</p>
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}