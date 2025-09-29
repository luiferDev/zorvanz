import { NavBar } from '../components/NavBar'
import { Texts } from '../components/texts'
import ContactSection from './ContactSection'
import { Features } from './Features'
import Footer from './Footer'
import { motion } from 'framer-motion'
import Hero from './Hero'
import { Section } from './Section'
import { Products } from '../features/products/components/Products'

export default function Home() {
    return (
        <main>
            <NavBar />
            <Hero />
            <Features />
            <Section>
                <Texts
                    styles="flex flex-col justify-center text-center items-center text-zorvanz-beige "
                    subtitle="Personaliza Tu Fragancia"
                    titleStyles="mt-20 mb-4 lg:mt-32 lg:text-6xl"
                    bodyStyles="mb-20 text-base w-[25ch] lg:mb-32 lg:text-2xl lg:w-[50ch]"
                    body="Elige tus notas favoritas y crea una fragancia exclusiva. Hazla tan única como tú."
                />
            </Section>
            <Products />
            <Section>
                <Texts
                    styles="flex flex-col justify-center text-start items-start text-zorvanz-beige ml-12"
                    subtitle="Crea Tu Fragancia Ahora"
                    body="Únete a nuestra comunidad de amantes de las fragancias personalizadas. Comienza hoy mismo."
                    titleStyles="mt-20 mb-4 text-4xl lg:text-6xl"
                    bodyStyles="mb-8 text-base w-[30ch] lg:text-2xl lg:w-[50ch]"
                />
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="ml-12"
                >
                    <a
                        href="#"
                        className="py-2.5 px-6 rounded-3xl text-xs bg-zorvanz-red text-zorvanz-beige mt-8 cursor-pointer lg:relative lg:bottom-24 lg:left-2/3 lg:py-6 lg:px-20 lg:text-2xl"
                    >
                        Contáctanos
                    </a>
                </motion.div>
            </Section>
            <ContactSection />
            <Footer />
        </main>
    )
}
