import { motion, useScroll, useTransform } from 'framer-motion'
import Menu from './menu'
import { Cart } from './Cart'
import LoginButton from './LoginButton'
import Logo from './Logo'

export function NavBar() {
    // Hook para obtener el progreso del scroll
    const { scrollY } = useScroll()
    // Hook para transformar el scroll en una propiedad CSS (en este caso, el valor de 'y')
    const backgroundColor = useTransform(
        scrollY,
        [0, 200], // El rango del scroll donde cambiará el color
        ['#00000000', 'rgba(255, 255, 255, 0.9)'],
    )

    return (
        <>
            <motion.menu
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: backgroundColor, // Aplica la transformación al eje Y
                    zIndex: 1,
                    padding: '0 0 2rem 0',
                    transition: 'background-color 0.3s ease-in-out',
                }}
            >
                <Menu />
                <div className="sticky flex items-center justify-between lg:justify-center z-[1]">
                    <div className="mt-2.5 w-14 h-auto relative top-4 left-30 lg:left-8 lg:w-40 lg:top-3 lg:h-auto">
                        <Logo />
                    </div>
                    <div className="flex items-center gap-4 relative top-5 right-4 lg:absolute lg:right-20">
                        <LoginButton />
                        <Cart />
                    </div>
                </div>
            </motion.menu>
        </>
    )
}
