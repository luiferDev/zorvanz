import { motion } from 'framer-motion'
import './App.css'
import { NavBar } from './components/NavBar'
import { Texts } from './components/texts'
import ContactSection from './UI/ContactSection'
import { Features } from './UI/Features'
import Footer from './UI/Footer'
import Hero from './UI/Hero'
import { Section } from './UI/Section'
import { Products } from './UI/Products'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Section>
        <Texts
          styles="section__text"
          subtitle="Personaliza Tu Fragancia"
          body="Elige tus notas favoritas y crea una fragancia exclusiva. Hazla tan única como tú." />
      </Section>  
      <Products />
      <Section>
        <Texts
          styles="section__text__cta"
          subtitle="Crea Tu Fragancia Ahora"
          body="Únete a nuestra comunidad de amantes de las fragancias personalizadas. Comienza hoy mismo." />
        <motion.div 
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className='container__btn__cta'>
          <a href="#" className='contact__btn'>Contáctanos</a>
        </motion.div>
      </Section>
      <ContactSection />
      <Footer />
    </>
  )
}

export default App