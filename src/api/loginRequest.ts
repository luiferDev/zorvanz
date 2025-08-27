import axios from '../api/auth'

export const loginRequest = async (userName: string, password: string) => {
    const res = await axios.post('/api/Login', {
        userName,
        password,
    })
    return res.data
}

export const profileRequest = async ({ username }: { username: string }) => {
    return await axios.get(
        `/User?username=${username}`,
    )
}
