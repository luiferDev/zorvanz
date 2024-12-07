import { useForm } from 'react-hook-form'
import { loginRequest } from "../api/loginRequest"
import { useAuthStore } from '../store/auth'

export default function LoginPage() {

    const { register, handleSubmit } = useForm()
    const setToken = useAuthStore(state => state.setToken)

    const url: string = import.meta.env.VITE_LOGIN

    return (
        <>
            <form action={url} onSubmit={handleSubmit( async(data) => {             
                const res = await loginRequest(data.userName, data.password)
                setToken(res.data.token) 
                console.log(res)
            })}>
                <input type="text" placeholder="Usuario"
                {...register("userName", { required: true })} />
                <input type="password" placeholder="**********"
                {...register("password", { required: true })}  />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
