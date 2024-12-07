import api from "../api/zorvanz-api"
import { useQuery } from "@tanstack/react-query"
import { PaginatedResponse } from "../types/interfaces"

async function fetchProducts() {
    const { data } = await api.get<PaginatedResponse>('/mocks.json')
    return data.content
}

export function useFetchProducts() {
    return useQuery({
        queryKey: ['productData'],
        queryFn: fetchProducts,
    })
}