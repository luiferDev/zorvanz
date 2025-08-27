import axios from 'axios'
import { useAuthStore } from '../store/auth'

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080'


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
