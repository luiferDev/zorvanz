import { Link, useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { useAuthStore } from '../store/auth'
import { Button } from '../components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '../components/ui/dropdown-menu'
import { useCallback } from 'react'

export default function LoginButton() {
    const logout = useAuthStore((state) => state.logout)
    const profile = useAuthStore((state) => state.profile)
    const navigate = useNavigate()

    const handleLogout = useCallback(async (): Promise<void> => {
        await logout()
        navigate('/')
    }, [logout, navigate])

    return (
        <>
            {profile ? (
                <small className="font-bold text-[8px] lg:text-xs">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={'outline'}
                                className="border-zorvanz-blue border-3 bg-transparent cursor-pointer hover:bg-zorvanz-blue hover:text-white"
                            >
                                {profile.userName}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <Link
                                    to={
                                        profile.role === 'Admin'
                                            ? '/dashboard'
                                            : '/profile'
                                    }
                                >
                                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
