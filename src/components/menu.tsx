import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/menu.css'

const menuItems = [
    { path: '/', label: 'Home', delay: 0.2 },
    { path: '/about', label: 'Quiénes Somos', delay: 0.3 },
    { path: '/product-catalog', label: 'Catálogo', delay: 0.4 },
]

function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <motion.div
                className="absolute top-4 left-4 w-12 h-12 flex flex-col items-center justify-center cursor-pointer bg-[#701C1C] gap-2.5 rounded-full z-50 lg:hidden lg:animate-none"
                onClick={toggleMenu}
            >
                <motion.div
                    className="bg-[#e6e1dc] h-0.5 w-3/5 rounded-sm"
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 12 : 0 }}
                ></motion.div>
                <motion.div
                    className="bg-[#e6e1dc] h-0.5 w-3/5 rounded-sm"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                ></motion.div>
                <motion.div
                    className="bg-[#e6e1dc] h-0.5 w-3/5 rounded-sm"
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -12 : 0 }}
                ></motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className={`menu-options ${isOpen ? 'open' : ''}`}
            >
                <ul className="navbar__links">
                    {menuItems.map((item) => (
                        <motion.li
                            key={item.path}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                                x: isOpen ? 0 : -100,
                                opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ delay: item.delay, type: 'just' }}
                        >
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default Menu
