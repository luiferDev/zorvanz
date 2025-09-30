import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useFetchProductById } from '../hooks/useProducts'
import { NavBar } from '../../../components/NavBar'
import { updateProduct } from '../../../api/updateProduct'
import { Product } from '../types/productTypes'
import { toast } from 'sonner'

export default function ProductUpdateForm() {
    const { id } = useParams()
    const Id = id ? id.toString() : ''
    console.log(Id)
    const navigate = useNavigate()
    const { data, isLoading, error } = useFetchProductById(Id)
    const { register, handleSubmit, reset } = useForm<Product>()
    console.log(data)

    useEffect(() => {
        // Fetch product data to prefill the form
        if (data) {
            reset({
                name: data.name,
                price: data.price,
                description: data.description,
                imageUrl: data.imageUrl,
                stock: data.stock,
                category: { categoryId: data.category.categoryId },
            })
        }
    }, [data, reset])

    const onSubmit = async (data: Partial<Product>) => {
        try {
            await updateProduct(
                Id,
                data.name || '',
                data.price || 0,
                data.description || '',
                data.imageUrl || '',
                data.stock || 0,
                data.category?.categoryId || 0,
                data.popularity || 0,
            )

            // 💡 Lógica de éxito: Mostrar el Toast y navegar
            toast.success('Producto Actualizado', {
                description: `El producto "${data.name}" se actualizó exitosamente. Redireccionando...`,
				duration: 3000, // Mostrar por 2 segundos
				position: 'top-right', // Posición en la parte superior
                onAutoClose: () => navigate('/product-catalog'), // Navegar cuando el toast se cierre automáticamente
            })
        } catch (err: unknown) {
            // Lógica de error: Mostrar un Toast de error
            console.error('Error al actualizar:', err)
            toast.error('Error al Actualizar', {
                description:
                    'Fallo la actualización del producto. Inténtelo de nuevo.',
            })
        }
    }

    if (isLoading) return <div>Cargando...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit(onSubmit)} className="product__form">
                <p className="product__title">Actualizar Producto</p>
                <p className="product__message">
                    Modifica solo los campos necesarios
                </p>
                <div className="product__flex">
                    <label>
                        <input
                            className="product__input"
                            type="text"
                            {...register('name')}
                            placeholder=""
                        />
                        <span>Producto</span>
                    </label>
                    <label>
                        <input
                            className="product__input"
                            type="text"
                            {...register('price')}
                            placeholder=""
                        />
                        <span>Precio</span>
                    </label>
                </div>
                <label>
                    <textarea
                        className="product__input"
                        {...register('description')}
                        cols={30}
                        rows={5}
                        placeholder=""
                    />
                    <span>Descripción</span>
                </label>
                <label>
                    <input
                        className="product__input"
                        type="text"
                        {...register('imageUrl')}
                        placeholder=""
                    />
                    <span>Imagen</span>
                </label>
                <label>
                    <input
                        className="product__input"
                        type="text"
                        {...register('stock')}
                        placeholder=""
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
                <button type="submit" className="product__submit">
                    Actualizar
                </button>
            </form>
        </>
    )
}
