import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom'
import Menu from './menu'
import Cart from './Cart';


export function NavBar() {
    // Hook para obtener el progreso del scroll
    const { scrollY } = useScroll();
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
                <div className="sticky flex items-center justify-center z-[1]">
                    <div className="mt-2.5 w-24 h-auto relative top-2.5 left-8 lg:w-60 lg:h-auto">
                        <Link to="/">
                            <img
                                className="logo"
                                src="/Zorvanz_1.png"
                                alt="zorvanz logo"
                            />
                        </Link>
                    </div>
                    <div className="z-[999] flex items-center gap-5 relative right-[-70] top-5 lg:visible lg:absolute lg:right-20">
                        <Link
                            className="bg-[#701C1C] rounded-full cursor-pointer w-8 h-8 flex items-center justify-center z-50 lg:w-11 lg:h-11 lg:transition-all lg:duration-300 lg:ease-in-out"
                            to="/login"
                        >
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17,
                                }}
                                src="/login.webp"
                                alt="login image"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Cart />
                    </div>
                </div>
            </motion.menu>
        </>
    )
}

