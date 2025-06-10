import api from '../api/zorvanz-api'
import { useQuery } from '@tanstack/react-query'
import { PaginatedResponse, Product } from '../types/interfaces'

async function fetchProducts() {
    const { data } = await api.get<PaginatedResponse>(
        '/Product?pageNumber=1&pageSize=8',
    )
    return data.data
}

export function useFetchProducts() {
    return useQuery({
        queryKey: ['productData'],
		queryFn: fetchProducts,
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

