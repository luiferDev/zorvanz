import { useEffect, useState } from 'react'
import { ApiResponse, Fragrance, UseFragrancesState } from '../types/interfaces'
import productData from '../../src/mock/mocks.json'

export const useFragrances = (): UseFragrancesState => {
    const [fragrances, setFragrances] = useState<Fragrance[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        // Simula el fetch
        try {
            const data: ApiResponse = productData
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
