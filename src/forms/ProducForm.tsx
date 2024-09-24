import { useForm } from 'react-hook-form'
import '../styles/form.css'

export default function ProducForm() {
    const { register, handleSubmit } = useForm()
    return (

        

        <form
            onSubmit={handleSubmit((data) => {
                console.log(JSON.stringify(data))
            })}
            className="form">
            <p className="title">Registrar Producto</p>
            <p className="message">Ingresa los datos del producto</p>
            <div className="flex">
                <label>
                    <input className="input" {...register("name", { required: true })} type="text"
                        placeholder="" />
                    <span>Producto</span>
                </label>

                <label>
                    <input className="input" {...register("precio", { required: true })} type="text"
                        placeholder="" required />
                    <span>Precio</span>
                </label>
            </div>

            <label>
                <textarea className="input" {...register("description", { required: true })} cols={30} rows={5} placeholder="" required />
                <span>Descripción</span>
            </label>

            <label>
                <input className="input" type="text"
                    {...register("imageUrl", { required: true })} accept="image/*"
                    placeholder="" required />
                <span>Imagen</span>
            </label>
            <label>
                <input className="input" {...register("stock", { required: true })} type="number" placeholder="" />
                <span>Inventario</span>
            </label>
            <label>
                <select className='input' {...register("categoryId", { required: true })} id="category">
//                 <option value="1">FRAGANCIAS_CORPORALES</option>
//                 <option value="3">FRAGANCIAS_AMBIENTALES</option>
//                 <option value="1">VELAS_AROMATICAS</option>
//             </select>
                <span>Categoría</span>
            </label>
            <label>
                <input className="input" {...register("popularity", { required: true })} type="number"
                    placeholder="" required />
                <span>Popularidad</span>
            </label>
            <button type='submit' className="submit">Enviar</button>
            <button className='submit' type="reset">Limpiar</button>
            {/* <p className="signin">Already have an acount ? <a href="#">Signin</a> </p> */}
        </form>
    )
}