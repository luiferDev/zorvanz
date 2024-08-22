import React, { useId } from "react"
import { useFilters } from "../hooks/useFilters"
import '../styles/filters.css'

export default function Filters() {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value) // Convertir a número
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
        <section className="filters">
            <div className="filter__range">
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={500}
                    value={filters.price}
                    onChange={handleChangeMinPrice}
                />
                <span>{filters.price}</span>
            </div>
            <div className="filter_selector">
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

