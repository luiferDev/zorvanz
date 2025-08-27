import axios from "axios"

const baseURL = import.meta.env.VITE_ZORVANZ_API_URL 

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api