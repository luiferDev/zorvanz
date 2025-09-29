import React, { useId } from 'react'
import '../styles/filters.css'
import { useProductsStore } from '../features/products/store/useProductsStore'

export default function Filters() {
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const category = useProductsStore((state) => state.category)
    const price = useProductsStore((state) => state.price)
    const filterProductsPrice = useProductsStore(
        (state) => state.filterProductsPrice,
    )
    const filterProductsCategory = useProductsStore(
        (state) => state.filterProductsCategory,
    )

    const handleChangeMinPrice = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = Number(event.target.value) // Convertir a número
        filterProductsPrice(value)
    }

    const handleChangeCategory = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const value = event.target.value
        filterProductsCategory(value === 'all' ? '' : value)
    }

    return (
        <section className="filters">
            <div className="PB-range-slider-div">
                <label
                    className="PB-range-slidervalue"
                    htmlFor={minPriceFilterId}
                >
                    Precio
                </label>
                <input
                    className="PB-range-slider"
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={500}
                    value={price}
                    onChange={handleChangeMinPrice}
                />
                <span className="PB-range-slidervalue">{price}</span>
            </div>
            <div className="filter_selector">
                <label
                    className="filter_selector_label"
                    htmlFor={categoryFilterId}
                >
                    Categoría
                </label>
                <select
                    className="filter_selector_select"
                    id={categoryFilterId}
                    value={category} // Obtener la categoría actual del estado
                    onChange={handleChangeCategory}
                >
                    <option value="all">Todas</option>
                    <option value="VELAS_AROMATICAS">Velas Arómaticas</option>
                    <option value="FRAGANCIAS_CORPORALES">
                        Fragancias Corporales
                    </option>
                    <option value="FRAGANCIAS_AMBIENTALES">
                        Fragancias Ambientales
                    </option>
                </select>
            </div>
        </section>
    )
}
