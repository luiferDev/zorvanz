import { useForm } from 'react-hook-form'
import { loginRequest } from "../api/loginRequest"
import { useAuthStore } from '../store/auth'
import '../styles/login.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {

    const { register, handleSubmit } = useForm()
    const setToken = useAuthStore(state => state.setToken)

    const url: string = import.meta.env.VITE_LOGIN

    return (
        <>
            <form className='form' action={url} onSubmit={handleSubmit(async (data) => {
                const res = await loginRequest(data.userName, data.password)
                setToken(res.data.token)
                console.log(res)
            })}>
                <p className="form-title">Iniciar Sesión</p>
                <div className='input-container'>
                    <input type="text" placeholder="usuario123"
                        {...register("userName", { required: true })} />
                    <span>
                    </span>
                </div>
                <div className='input-container'>
                    <input type="password" placeholder="**********"
                        {...register("password", { required: true })} />
                </div>

                <button className='submit' type="submit">Login</button>
                <p className="signup-link">
                    ¿No tienes una cuenta?
                    <Link to="/register"> Registrate</Link>
                </p>
            </form>
        </>
    )
}




