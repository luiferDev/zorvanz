import axios from "axios"

const baseURL = 'http://zorvanz-api.runasp.net'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api