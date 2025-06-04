import axios from "axios"

const baseURL = 'http:/localhos:8080'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api