import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080'
console.log(`Zorvanz API Base URL: ${baseURL}`)

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api