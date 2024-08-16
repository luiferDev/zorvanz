import { useEffect, useState } from 'react'
import { ApiResponse, Fragrance, UseFragrancesState } from '../types/interfaces';

const url = 'http://localhost:8080/api/products'

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