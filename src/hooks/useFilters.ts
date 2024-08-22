import { useContext } from "react"
import { Fragrance } from "../types/interfaces"
import { FiltersContext } from "../context/filterProducts"

export function useFilters() {

    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (products: Fragrance[]): Fragrance[] => {
        return products.filter((product) => {
            return (
                product.price >= filters.price &&
                (
                    filters.categoryName === 'all' ||
                    product.category.categoryName === filters.categoryName
                )
            )
        })
    }

    return { filters, filterProducts, setFilters }
}