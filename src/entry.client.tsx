import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import './index.css'

declare global {
    interface Window {
        Cypress?: any;
    }
}

if (window.Cypress) {
    const root = document.getElementById('root')
    if (root?.hasAttribute('data-reactroot')) {
        root.innerHTML = ''
    }
}


ReactDOM.hydrateRoot(
    document,
    <React.StrictMode>
        <HydratedRouter />
    </React.StrictMode>,
)
