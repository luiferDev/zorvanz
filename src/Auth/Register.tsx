import { useForm } from 'react-hook-form'
import { NavBar } from '../components/NavBar'
import { useNavigate, Link } from 'react-router'
import { RegisterFormInputs } from '../types/interfaces'
import { registerUserRequest } from '../api/registerRequest'

export default function Register() {
	const { register, handleSubmit } = useForm<RegisterFormInputs>()
	const navigate = useNavigate()

    const onRegister = async (data: RegisterFormInputs) => {
        try {
            await registerUserRequest(
                data.name,
                data.lastName,
                data.userName,
				data.password,
				data.email
			)
			alert('Usuario registrado correctamente')
			navigate('/login')
		} catch (error) {
			if (error instanceof Error) {
                alert('Error al registrar el usuario: ' + error.message)
            }
            console.error(error)
        }
    }

    return (
        <>
            <NavBar />
            <form
                className="w-full bg-white block max-w-[350px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] mx-auto my-[10%] p-4 rounded-lg"
                onSubmit={handleSubmit(onRegister)}
            >
                <p className="text-xl leading-7 font-semibold text-center text-black">
                    Registrar Usuario
                </p>
                <div className="input-container">
                    <input
                        className="bg-white text-sm leading-5 w-[300px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] pr-12 p-4 rounded-lg outline-none border mx-0 my-2 border-solid"
                        type="text"
                        placeholder="Nombre"
                        {...register('name', { required: true })}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="bg-white text-sm leading-5 w-[300px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] pr-12 p-4 rounded-lg outline-none border mx-0 my-2 border-solid"
                        type="text"
                        placeholder="Apellido"
                        {...register('lastName', { required: true })}
                    />
                </div>
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
                <div className="input-container">
                    <input
                        className="bg-white text-sm leading-5 w-[300px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] pr-12 p-4 rounded-lg outline-none border mx-0 my-2 border-solid"
                        type="text"
                        placeholder="ejemplo@tu-correo.com"
                        {...register('email', { required: true })}
                    />
                </div>

                <button
                    className="block bg-[#1c2470]
					text-white text-sm leading-5 font-medium 
					w-full uppercase px-5 py-3 rounded-lg outline-none border mx-0 my-2 border-solid cursor-pointer"
                    type="submit"
                >
                    Registrarse
                </button>
                <p className="text-[#6B7280] text-sm leading-5 text-center">
                    ¿Ya tienes una cuenta?
                    <Link className="underline" to="/login">
                        {' '}
                        Inicia Sesión
                    </Link>
                </p>
            </form>
        </>
    )
}
