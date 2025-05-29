import axios from "../api/auth";

export const loginRequest = async (userName: string, password: string) => {
	const res = await axios.post('http://localhost:5297/api/login', {
        userName,
        password
    })
    return res.data
}