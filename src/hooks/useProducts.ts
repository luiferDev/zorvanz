import api from '../api/zorvanz-api'
import { useQuery } from '@tanstack/react-query'
import { PaginatedResponse } from '../types/interfaces'

async function fetchProducts() {
    const { data } = await api.get<PaginatedResponse>(
        'http://localhost:5297/Product?pageNumber=1&pageSize=3',
    )
    return data.data
}

export function useFetchProducts() {
    return useQuery({
        queryKey: ['productData'],
        queryFn: fetchProducts,
    })
}
