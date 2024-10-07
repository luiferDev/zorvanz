import { useForm } from 'react-hook-form'
import '../styles/form.css'

export default function ProducForm() {
    const { register, handleSubmit } = useForm()
    return (

        <form
            action='http://localhost:8080/api/products'
            onSubmit={handleSubmit((data) => {
            fetch('http://localhost:8080/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            })}
            className="form">
            <p className="title">Registrar Producto</p>
            <p className="message">Ingresa los datos del producto</p>
            <div className="flex">
                <label>
                    <input className="input" {...register("name", { required: true })} type="text"
                        placeholder="" required />
                    <span>Producto</span>
                </label>

                <label>
                    <input className="input" {...register("price", { required: true })} type="text"
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
                <input className="input" {...register("stock", { required: true })} type="number" placeholder="" required />
                <span>Inventario</span>
            </label>
            <label>
                <select className='input' {...register("categoryId", { required: true })} required >
//                 <option value="2">FRAGANCIAS CORPORALES</option>
//                 <option value="3">FRAGANCIAS AMBIENTALES</option>
//                 <option value="1">VELAS AROMATICAS</option>
//             </select>
                <span>Categoría</span>
            </label>
            <label>
                <input className="input" {...register("popularity", { required: true })} type="number"
                    placeholder="" max={5} step={0.1} required />
                <span>Popularidad</span>
            </label>
            <button type='submit' className="submit">Enviar</button>
            <button className='submit' type="reset">Limpiar</button>
            {/* <p className="signin">Already have an acount ? <a href="#">Signin</a> </p> */}
        </form>
    )
}