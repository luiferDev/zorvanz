import { Link } from 'react-router'
import { motion } from 'motion/react'
import { useAuthStore } from '../store/auth'

export default function LoginButton() {
    const profile = useAuthStore((state) => state.profile)

    return (
        <>
            {profile ? (
                <small className="font-bold text-[8px] lg:text-xs">
                    <Link
                        to={
                            profile.role === 'Admin' ? '/dashboard' : '/profile'
                        }
                    >
                        {profile.userName}
                    </Link>
                </small>
            ) : (
                <Link
                    className="bg-zorvanz-red rounded-full cursor-pointer w-8 h-8 flex items-center justify-center z-50 lg:w-11 lg:h-11 lg:transition-all lg:duration-300 lg:ease-in-out"
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
            )}
        </>
    )
}
