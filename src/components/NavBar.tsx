import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom'
import zorvanz from '/Zorvanz_1.svg'
import Menu from './menu'


export function NavBar() {
    // Hook para obtener el progreso del scroll
    const { scrollY } = useScroll();
    // Hook para transformar el scroll en una propiedad CSS (en este caso, el valor de 'y')
    const backgroundColor = useTransform(
        scrollY,
        [0, 200], // El rango del scroll donde cambiará el color
        ['#00000000', 'rgba(112, 28, 28, 0.5)'],
    )

    return (
        <>
            <motion.menu style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: backgroundColor, // Aplica la transformación al eje Y
                zIndex: 1,
                padding: '0 0 2rem 0',
                transition: 'background-color 0.3s ease-in-out'
            }}
            >
                <Menu />
                <div className="navbar">
                    <div className="navbar__logo">
                        <Link to="/">
                            <img className='logo' src={zorvanz} alt="zorvanz logo" />
                        </Link>
                    </div>
                    <div className='navbar__btns'>
                        <Link to='/login'>Entrar</Link>
                        <Link to='/comprar'>Comprar</Link>
                    </div>
                </div>
            </motion.menu>

        </>
    )
}

