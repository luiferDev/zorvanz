import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router'
import { useCallback } from 'react'
import { NavBar } from '../components/NavBar'

export default function Dashboard() {

    const logout = useAuthStore((state) => state.logout)
    const profile = useAuthStore((state) => state.profile)
    const navigate = useNavigate()

    const handleLogout = useCallback(async () => {
        await logout()
        navigate('/')
    }, [logout, navigate])

    return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<NavBar />
            <h1>Dashboard</h1>
            {profile && (
                <div>
					<p>Bienvenida {profile.name} {profile.lastName}</p>
                </div>
            )}
            <button
                className="cursor-pointer px-8 py-4 bg-zorvanz-red text-white rounded-2xl"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}
