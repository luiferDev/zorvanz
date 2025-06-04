import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router'
import { useCallback } from 'react'

export default function Dashboard() {

	const logout = useAuthStore((state) => state.logout)
	const navigate = useNavigate()

	const handleLogout = useCallback(async () => {
		await logout()
		navigate('/')
	}, [logout, navigate])

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome to your dashboard!</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	)
}
