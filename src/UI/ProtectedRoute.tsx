import { Navigate } from 'react-router'
import { Profile } from '../types/interfaces'

interface ProtectedRouteProps {
    children: React.ReactNode
	isAuth?: boolean
	user?: Profile
	token?: string
    allowedRoles?: string[]
}

export const ProtectedRoute = ({
	isAuth,
	user,
	allowedRoles,
	//token,
    children,
}: ProtectedRouteProps) => {

    if (!isAuth || !allowedRoles?.includes(user?.role!)) {
        return <Navigate to="/login" />
	}
	
	// if (!user.emailVerified) {
	// 	return <Navigate to="/verify-email" />
	// }
	// if (!token) {
	// 	return <Navigate to="/register"/>
	// }

    return children
}
