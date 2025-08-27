import { useCallback } from "react"
import { useNavigate } from "react-router"
import { useAuthStore } from "../store/auth"


export default function Profile() {

	const logout = useAuthStore((state) => state.logout)
	const profile = useAuthStore((state) => state.profile)
    const navigate = useNavigate()

    const handleLogout = useCallback(async () => {
        await logout()
        navigate('/')
    }, [logout, navigate])

	return (
		<div>
			<h1>Profile</h1>
			{profile && (
				<div>
					<p>Name: {profile.name}</p>
					<p>Email: {profile.email}</p>
				</div>
			)}
			<p>Welcome to your profile!</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	)
}
