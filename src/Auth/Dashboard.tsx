import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router'
import { useCallback } from 'react'
import { NavBar } from '../components/NavBar'
import { ChartLineMultiple } from '../charts/ChartLineMultiple'
import { ChartBarMixed } from '../charts/ChartBarMixed'
import { ChartLineInteractive } from '../charts/ChartLineInteractive'

export default function Dashboard() {
	const logout = useAuthStore((state) => state.logout)
	const profile = useAuthStore((state) => state.profile)
	const navigate = useNavigate()
    const handleLogout = useCallback(async (): Promise<void> => {
        await logout()
        navigate('/')
	}, [logout, navigate])


    return (
        <div className="px-22">
            <NavBar />
            <div className="mt-38 mb-8 flex flex-row items-start justify-between gap-4">
                <div>
                    <h1 className="text-5xl font-bold">Dashboard</h1>
                    {profile && (
                        <p className="text-2xl">
                            Bienvenida/o {profile.name} {profile.lastName}
                        </p>
                    )}
                </div>
                <div className="flex flex-col items-end gap-4">
                    <button
                        className="cursor-pointer px-8 py-4 bg-zorvanz-blue text-white 
						rounded-2xl hover:bg-zorvanz-blue/90 transition-all duration-300 ease-in-out"
                        onClick={() => navigate('/add-product')}
                    >
                        Crear Producto
                    </button>
                    <button
                        className="cursor-pointer px-8 py-4 bg-zorvanz-red text-white rounded-2xl hover:bg-zorvanz-red/90 transition-all duration-300 ease-in-out"
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>

            <ChartLineInteractive />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-4">
                <ChartLineMultiple />
                <ChartBarMixed />
            </div>
        </div>
    )
}
