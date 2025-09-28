import api from '../api/zorvanz-api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PaginatedResponse, Product } from '../types/interfaces'
import authApi from '../api/auth'

async function fetchProducts(pageSize: number): Promise<Product[]> {
    const { data } = await api.get<PaginatedResponse>(
        `/Product?pageNumber=1&pageSize=${pageSize}`,
    )
    return data.data
}

export function useFetchProducts(pageSize: number) {
    return useQuery({
        queryKey: ['productData', pageSize],
		queryFn: () => fetchProducts(pageSize),

		enabled: pageSize > 0,
    })
}

async function fetchProductById(id: string): Promise<Product> {
    const { data } = await api.get<Product>(`/Product/${id}`)
    return data
}

export function useFetchProductById(id: string) {
    return useQuery({
        queryKey: ['productData', id],
        queryFn: () => fetchProductById(id),
    })
}

export const deleteProductRequest = async (id: string): Promise<void> => {
    // Si tu API devuelve algo (ej. un 204 No Content), simplemente la promesa resuelve.
    await authApi.delete(`/Product/${id}`)
}

export function useDeleteProduct() {
    // Necesitas el cliente de query para invalidar la caché
    const queryClient = useQueryClient()

    return useMutation({
        // La función que realiza la petición al servidor.
        // El 'id' se pasa a través de la función 'mutate'.
        mutationFn: deleteProductRequest,

        // 💡 Buenas Prácticas: Acciones después de un borrado exitoso.
        onSuccess: () => {
            // Esto es CRUCIAL. Invalida la caché de la lista de productos
            // (asumiendo que tu lista usa 'productData' como queryKey base).
            // Esto obliga a TanStack Query a volver a solicitar la lista,
            // mostrando los datos actualizados (sin el producto borrado).
            queryClient.invalidateQueries({ queryKey: ['productData'] })

            // Opcional: Mostrar una notificación de éxito al usuario.
            console.log('¡Producto borrado exitosamente!')
        },

		onError: (error: string) => {
            // Manejo de errores de la API.
            console.error('Error al borrar el producto:', error)
            // Opcional: Mostrar una notificación de error al usuario.
        },
    })
}