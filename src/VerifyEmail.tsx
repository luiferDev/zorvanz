import React from 'react'

export default function VerifyEmail(): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-zorvanz-blue">
                Verifica tu correo
            </h1>
            <p className="text-lg text-zorvanz-blue">
                Te hemos enviado un correo para verificar tu cuenta
            </p>
        </div>
    )
}
