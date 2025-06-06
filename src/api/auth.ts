import axios from 'axios'
import { useAuthStore } from '../store/auth'

const baseURL = 'http://zorvanz-api.runasp.net'

const authApi = axios.create({
    baseURL: baseURL,
    withCredentials: true,
})

authApi.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

export default authApi
