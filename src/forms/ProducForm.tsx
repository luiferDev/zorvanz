import { useForm } from 'react-hook-form'
import { Product } from '../types/interfaces'
import { createProduct } from '../api/createProduct'
import '../styles/form.css'
import BackButton from '../UI/back-button'

export default function ProducForm() {
    const { register, handleSubmit } = useForm<Product>()
    // const baseUrl = import.meta.env.VITE_API_URL
    return (
        <>
            <BackButton />
            <form
                onSubmit={handleSubmit((data: Product) =>
                    createProduct(
                        data.name,
                        parseFloat(data.price.toString()),
                        data.description,
                        data.imageUrl,
                        parseInt(data.stock.toString()),
                        parseInt(data.category.categoryId.toString()),
                        parseFloat(data.popularity.toString()),
					),
                )}
                className="product__form"
            >
                <p className="product__title">Registrar Producto</p>
                <p className="product__message">
                    Ingresa los datos del producto
                </p>
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
                                    !isNaN(value) ||
                                    'El precio debe ser un número',
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
            </form>
        </>
    )
}
