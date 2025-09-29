import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import authApi from "../../../api/auth"
import api from "../../../api/zorvanz-api"
import { PaginatedResponse, Product } from "../types/productTypes"

// function for fetch products
export async function getProducts(pageSize: number): Promise<Product[]> {
	const { data } = await api.get<PaginatedResponse>(
		`/Product?pageNumber=1&pageSize=${pageSize}`,
	)
	return data.data
}

export async function fetchProductById(id: string): Promise<Product> {
	const { data } = await api.get<Product>(`/Product/${id}`)
	return data
}

export const deleteProductRequest = async (id: string): Promise<void> => {
	// Si tu API devuelve algo (ej. un 204 No Content), simplemente la promesa resuelve.
	await authApi.delete(`/Product/${id}`)
}



export function useGetProducts(pageSize: number) {
    return useQuery({
        queryKey: ['productData', pageSize],
        queryFn: () => getProducts(pageSize),

        enabled: pageSize > 0,
    })
}

export function useFetchProductById(id: string) {
    return useQuery({
        queryKey: ['productData', id],
        queryFn: () => fetchProductById(id),
    })
}

export function useDeleteProduct() {
    // Necesitas el cliente de query para invalidar la caché
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteProductRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['productData'] })
            console.log('¡Producto borrado exitosamente!')
        },

        onError: (error: string) => {
            console.error('Error al borrar el producto:', error)
        },
    })
}
