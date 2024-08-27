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
                body="Descubre las características que hacen nuestras fragancias y velas especiales." />
            <div className="container">
                {images.map((image) => (
                    <section className={`img__container ${image.class}`} key={image.id}>
                        <motion.div 
                        whileHover={{ scale: [null, 1.3, 1.2] }}
                        transition={{ duration: 0.5 }}
                        className="image">
                            <img className="img__parfum" src={image.src} alt={image.alt} />
                        </motion.div>
                        <div className="text">
                            <h4>{image.title}</h4>
                            <p>{image.body}</p>
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}