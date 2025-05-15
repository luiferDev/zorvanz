import { useForm } from 'react-hook-form'
import { loginRequest } from '../api/loginRequest'
import { useAuthStore } from '../store/auth'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import BackButton from '../UI/back-button'

export default function LoginPage() {
    const { register, handleSubmit } = useForm()
    const setToken = useAuthStore((state) => state.setToken)

    const url: string = import.meta.env.VITE_LOGIN

    return (
        <>
            <BackButton />
            <form
                className="w-full bg-white block max-w-[350px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] mx-auto my-[10%] p-4 rounded-lg"
                action={url}
                onSubmit={handleSubmit(async (data) => {
                    const res = await loginRequest(data.userName, data.password)
                    setToken(res.data.token)
                    console.log(res)
                })}
            >
                <p className="text-xl leading-7 font-semibold text-center text-black">
                    Iniciar Sesión
                </p>
                <div className="relative">
                    <input
                        className="bg-white text-sm leading-5 w-[300px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] pr-12 p-4 rounded-lg outline-none border mx-0 my-2 border-solid"
                        type="text"
                        placeholder="usuario123"
                        {...register('userName', { required: true })}
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    <input
                        className="bg-white text-sm leading-5 w-[300px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] pr-12 p-4 rounded-lg outline-none border mx-0 my-2 border-solid"
                        type="password"
                        placeholder="**********"
                        {...register('password', { required: true })}
                    />
                </div>

                <button
                    className="block bg-[#1c2470]
					text-white text-sm leading-5 font-medium 
					w-full uppercase px-5 py-3 rounded-lg outline-none border mx-0 my-2 border-solid"
                    type="submit"
                >
                    Login
                </button>
                <p className="text-[#6B7280] text-sm leading-5 text-center">
                    ¿No tienes una cuenta?
                    <Link className="underline" to="/register">
                        {' '}
                        Registrate
                    </Link>
                </p>
            </form>
        </>
    )
}
