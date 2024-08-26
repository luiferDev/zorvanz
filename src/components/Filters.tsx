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
        const value = event.target.value
        setFilters(prevState => ({
            ...prevState,
            categoryName: value 
        }))
    }

    return (
        <section className="filters">
            <div className="PB-range-slider-div">
                <label className="PB-range-slidervalue" htmlFor={minPriceFilterId}>Precio</label>
                <input className="PB-range-slider"
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={500}
                    value={filters.price}
                    onChange={handleChangeMinPrice}
                />
                <span className="PB-range-slidervalue">{filters.price}</span>
            </div>
            <div className="filter_selector">
                <label className="filter_selector_label" htmlFor={categoryFilterId}>Categoría</label>
                <select className="filter_selector_select" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="VELAS_AROMATICAS">Velas Arómaticas</option>
                    <option value="FRAGANCIAS_CORPORALES">Fragancias Corporales</option>
                    <option value="FRAGANCIAS_AMBIENTALES">Fragancias Ambientales</option>
                </select>
            </div>
        </section>
    )
}

