// 📁 ../utils/delete.ts

import { UseMutateFunction } from '@tanstack/react-query'

// Opcional: Definimos la interfaz del objeto que vamos a recibir
interface DeleteProductMutationProps {
    // Usamos el mismo tipo que retorna el hook useDeleteProduct
    mutate: UseMutateFunction<void, string, string, unknown>
}

/**
 * Patrón de Fábrica de Funciones (corregido).
 * Recibe un objeto que contiene la función 'mutate'.
 */
// 💡 CORRECCIÓN: Nombramos el argumento como 'mutationHandlers'
export const createDeleteHandler = (
    mutationHandlers: DeleteProductMutationProps,
) => {
    // Desestructuramos la propiedad 'mutate' del objeto recibido
    const { mutate } = mutationHandlers

    // Devolvemos el handler de borrado
    return (productName: string, productId: string) => {
        if (
            window.confirm(
                `¿Estás seguro de que quieres borrar el producto: "${productName}"?`,
            )
        ) {
            // Aquí 'mutate' está correctamente definida y tipada
            mutate(productId)
        }
    }
}
