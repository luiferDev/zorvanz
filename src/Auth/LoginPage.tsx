import { useForm } from 'react-hook-form'
import { useAuthStore } from '../store/auth'
import { NavBar } from '../components/NavBar'
import { useNavigate, Link } from 'react-router'
import { LoginFormInputs } from '../types/interfaces'
import { loginRequest, profileRequest } from '../api/loginRequest'

export default function LoginPage() {
    const { register, handleSubmit } = useForm<LoginFormInputs>()
    const setToken = useAuthStore((state) => state.setToken)
    const setProfile = useAuthStore((state) => state.setProfile)
    const navigate = useNavigate()

    const onLogin = async (data: LoginFormInputs) => {
        const res = await loginRequest(data.userName, data.password)
        const resProfile = await profileRequest({ username: data.userName })
        setToken(res.token)
        setProfile(resProfile.data)
        if (resProfile.data.role === 'Admin') {
            navigate('/dashboard')
        } else {
            navigate('/profile')
        }
    }

    return (

        <>
            <NavBar />
            <form
                className="w-full bg-white block max-w-[350px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] mx-auto my-[10%] p-4 rounded-lg"
                onSubmit={handleSubmit(onLogin)}

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
					w-full uppercase px-5 py-3 rounded-lg outline-none border mx-0 my-2 border-solid cursor-pointer"
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
