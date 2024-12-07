import { Product } from "../types/interfaces"
import { useProductsStore } from "../store/useProductsStore"

export function useFilters() {

    // Obtener los filtros y productos filtrados desde el store
    const price = useProductsStore((state) => state.price)
    const category = useProductsStore((state) => state.category)

    // Función para filtrar productos manualmente (si es necesario)
    const filterProducts = (products: Product[]): Product[] => {
        return products.filter((product) => {
            return (
                product.price >= price && // Filtrar por precio
                (category === "" || product.category.categoryName === category) // Filtrar por categoría
            )
        })
    }

    return { filterProducts }

}