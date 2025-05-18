import { NavBar } from '../components/NavBar'
import Footer from '../UI/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Hero from './UI/Hero'
import Mission from './UI/Mission'
import Vision from './UI/Vision'
import Values from './UI/Values'
import Testimonials from './UI/Testimonials'
import Team from './UI/Team'
import CTA from './UI/CTA'

export default function About() {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <Mission />
                <Vision />
                <Values />
                <Testimonials />
                <Team />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
