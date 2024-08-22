import React, { useId, useState } from "react"
import { useFilters } from "../hooks/useFilters"

export default function Filters() {
    const { setFilters } = useFilters()
    const [minPrice, SetMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value) // Convertir a número
        SetMinPrice(value)
        setFilters(prevState => ({
            ...prevState,
            price: value
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prevState => ({
            ...prevState,
            categoryName: event.target.value 
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={500}
                    value={minPrice}
                    onChange={handleChangeMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="VELAS_AROMATICAS">Velas Arómaticas</option>
                    <option value="FRAGANCIAS_CORPORALES">Fragancias Corporales</option>
                    <option value="FRAGANCIAS_AMBIENTALES">Fragancias Ambientales</option>
                </select>
            </div>
        </section>
    )
}

