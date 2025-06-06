import axios from './zorvanz-api'

export const registerUserRequest = async (
    name: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
) => {
    const res = await axios.post('/api/Register', {
        name,
        lastName,
        userName,
        password,
        email,
        role: 'User',
    })
    return res.data
}

export const registerAdminRequest = async (
    name: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
) => {
    const res = await axios.post('/api/Register/admin', {
        name,
        lastName,
        userName,
        password,
        email,
        role: 'Admin',
    })
    return res.data
}

