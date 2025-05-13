import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton: React.FC = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1) // Navega a la página anterior
    }

    return (
        <button
            onClick={handleGoBack}
            style={{
                padding: '10px',
                cursor: 'pointer',
                background: 'none',
                border: '1px #1c2470 solid',
                borderRadius: '50%',
            }}
        >
            <ArrowLeftIcon />
        </button>
    )
}

// separar el svg en un componente
const ArrowLeftIcon: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
        >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 5 5 12 12 19"></polyline>
        </svg>
    )
}

export default BackButton
