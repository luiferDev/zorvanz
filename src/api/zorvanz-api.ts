import axios from "axios"

const baseURL = 'http:/localhos:5297/api'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api