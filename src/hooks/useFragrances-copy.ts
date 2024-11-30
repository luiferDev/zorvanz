import { useEffect, useState } from 'react'
import { PaginatedResponse, Product, UseFragrancesState } from '../types/interfaces'
import productData from '../../src/mock/mocks.json'

export const useFragrances = (): UseFragrancesState => {
    const [fragrances, setFragrances] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        // Simula el fetch
        try {
            const data: PaginatedResponse = productData
            setFragrances(data.content)
            setLoading(false)
        } catch (err) {
            setError('Error al obtener los datos')
            setLoading(false)
            console.log(err)
        }

    }, [])

    return { fragrances, loading, error }
}
