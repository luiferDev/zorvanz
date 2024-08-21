import { useState } from "react"
import { Filters, Fragrance } from "../types/interfaces"

export function useFilters() {
    const [filter, setFilter] = useState<Filters>({
        categoryName: 'all',
        price: 0
    })

    const filterProducts = (products: Fragrance[]): Fragrance[] => {
        return products.filter((product) => {
            return (
                product.price >= filter.price &&
                (
                    filter.categoryName === 'all' ||
                    product.category.categoryName === filter.categoryName
                )
            )
        })
    }

    return { filterProducts, setFilter }
}