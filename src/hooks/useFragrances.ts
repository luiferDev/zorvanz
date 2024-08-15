import { useEffect, useState } from 'react'

const url = 'http://localhost:8080/api/products'

// Define la interfaz para el producto
interface Fragrance {
    id: number
    name: string
    imageUrl: string
    price: number
    description: string
    stock: number
    popularity: number
    category: Category
}

interface ApiResponse {
    content: Fragrance[]
}

interface Category {
    categoryId: number
    categoryName: string
}

// Define la interfaz para el estado del hook
interface UseFragrancesState {
    fragrances: Fragrance[]
    loading: boolean
    error: string | null
}

export const useFragrances = (): UseFragrancesState => {
    const [fragrances, setFragrances] = useState<Fragrance[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async res => {
            if (!res.ok) throw new Error('Error al obtener los datos')
            return await res.json()
        }).then((data:ApiResponse)  => {
            setFragrances(data.content)
            setLoading(false)
        }).catch(err => {
            setError(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return { fragrances, loading, error }
};