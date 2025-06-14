import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Product } from '../types/interfaces'

async function createProduct(data: Product, baseUrl: string) {
    try {
        const response = await axios.post(`${baseUrl}/api/products`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log('Producto registrado:', response.data)
        alert('Producto registrado exitosamente!')
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error(
                'Error de Axios:',
                error.response?.data || error.message,
            )
            alert(
                'Error al registrar el producto: ' +
                    (error.response?.data?.message || error.message),
            )
        } else {
            console.error('Error desconocido:', error)
            alert('Hubo un error inesperado.')
        }
    }
}

export default function ProducForm() {
    const { register, handleSubmit } = useForm<Product>()
    const baseUrl = import.meta.env.VITE_API_URL
    return (
        <form
            onSubmit={handleSubmit((data) => createProduct(data, baseUrl))}
            className="product__form"
        >
            <p className="product__title">Registrar Producto</p>
            <p className="product__message">Ingresa los datos del producto</p>
            <div className="product__flex">
                <label>
                    <input
                        className="product__input"
                        {...register('name', { required: true })}
                        type="text"
                        placeholder=""
                        required
                    />
                    <span>Producto</span>
                </label>

                <label>
                    <input
                        className="product__input"
                        {...register('price', {
                            required: true,
                            validate: (value) =>
                                !isNaN(value) || 'El precio debe ser un número',
                        })}
                        type="text"
                        placeholder=""
                        required
                    />
                    <span>Precio</span>
                </label>
            </div>

            <label>
                <textarea
                    className="product__input"
                    {...register('description', { required: true })}
                    cols={30}
                    rows={5}
                    placeholder=""
                    required
                />
                <span>Descripción</span>
            </label>

            <label>
                <input
                    className="product__input"
                    type="text"
                    {...register('imageUrl', { required: true })}
                    accept="image/*"
                    placeholder=""
                    required
                />
                <span>Imagen</span>
            </label>
            <label>
                <input
                    className="product__input"
                    {...register('stock', { required: true })}
                    type="text"
                    placeholder=""
                    required
                />
                <span>Inventario</span>
            </label>
            <label>
                <select
                    className="product__input"
                    {...register('category.categoryId', { required: true })}
                    required
                >
                    <option value="2">FRAGANCIAS CORPORALES</option>
                    <option value="3">FRAGANCIAS AMBIENTALES</option>
                    <option value="1">VELAS AROMATICAS</option>
                </select>
                <span>Categoría</span>
            </label>
            <label>
                <input
                    className="product__input"
                    {...register('popularity', { required: true })}
                    type="text"
                    placeholder=""
                    max={5}
                    step={0.1}
                    required
                />
                <span>Popularidad</span>
            </label>
            <button type="submit" className="product__submit">
                Enviar
            </button>
            <button className="product__submit" type="reset">
                Limpiar
            </button>
            {/* <p className="signin">Already have an acount ? <a href="#">Signin</a> </p> */}
        </form>
    )
}
