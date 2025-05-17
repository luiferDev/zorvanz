import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
                className="absolute top-4 left-4 w-12 h-12 flex flex-col items-center justify-center cursor-pointer bg-zorvanz-red gap-2.5 rounded-full z-50 lg:hidden lg:animate-none"
                onClick={toggleMenu}
            >
                <motion.div
                    className="bg-zorvanz-beige h-0.5 w-3/5 rounded-sm"
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 12 : 0 }}
                ></motion.div>
                <motion.div
                    className="bg-zorvanz-beige h-0.5 w-3/5 rounded-sm"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                ></motion.div>
                <motion.div
                    className="bg-zorvanz-beige h-0.5 w-3/5 rounded-sm"
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -12 : 0 }}
                ></motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 left-0 w-[80vw] h-[100vh] bg-zorvanz-red px-5 py-20 z-[2] lg:bg-transparent lg:top-[-58px] lg:left-[10px] lg:w-[40vw] lg:h-[10vh] lg:z-[2] lg:opacity-100! lg:transform! lg:translate-x-0! ${
                    isOpen ? 'open' : ''
                }`}
            >
                <ul className="list-none m-0 p-0 flex flex-col gap-8 lg:flex-row lg:opacity-100! lg:pb-16 lg:pl-16 lg:transform! lg:translate-x-0! lg:animate-none z-50">
                    {menuItems.map((item) => (
                        <motion.li
                            className="my-2.5 text-white! lg:opacity-100! lg:transform! lg:translate-x-0! lg:text-black!"
                            key={item.path}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                                x: isOpen ? 0 : -100,
                                opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ delay: item.delay, type: 'just' }}
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    // clases base (desktop y mobile) + las de "activo" cuando isActive === true
                                    `font-normal lg:text-2xl lg:text-black ${
                                        isActive
                                            ? 'lg:border-4 lg:border-zorvanz-red lg:p-2.5 lg:rounded-3xl lg:text-black'
                                            : ''
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default Menu
