import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import zorvanz from '/Zorvanz_1.svg'
import Menu from './menu'

export function NavBar() {
    return (
        <>
        <motion.menu 
        initial={{ background: 'transparent' }}
        animate={{ background: 'transparent' }}>
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