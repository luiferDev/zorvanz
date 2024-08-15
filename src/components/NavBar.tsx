import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom'
import zorvanz from '/Zorvanz_1.svg'
import Menu from './menu'


export function NavBar() {
    // Hook para obtener el progreso del scroll
    const { scrollY } = useScroll();
    // Hook para transformar el scroll en una propiedad CSS (en este caso, el valor de 'y')
    const y = useTransform(scrollY, [0, 300], [0, 0]);

    return (
        <>
            <motion.menu style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                y: y, // Aplica la transformación al eje Y
                zIndex: 1,
            }}>
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

