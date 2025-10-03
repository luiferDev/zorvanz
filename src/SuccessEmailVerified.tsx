import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from './components/ui/button'
import { CheckIcon } from 'lucide-react'

export default function SuccessEmailVerified(): React.JSX.Element {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <CheckIcon className="bg-zorvanz-blue text-zorvanz-beige rounded-full h-50 w-50" />
            <h1 className="text-4xl font-bold text-zorvanz-blue pb-2 pt-6">
                Correo verificado
            </h1>
            <p className="text-lg text-zorvanz-blue pb-2">
                Gracias por verificar tu correo
            </p>
            <p className="text-lg text-zorvanz-blue pb-8">
                Ahora puedes iniciar sesión con tu cuenta
            </p>
            <div className="flex flex-col items-center justify-center">
                <Button
                    className="bg-zorvanz-blue"
                    onClick={() => navigate('/login')}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}
