import { Product } from "./productTypes";

export interface CartButtonProps {
    product: Product
}


export interface ModalProps {
    productName: string
    id: string
    onMutate: (productId: string) => void // Función para ejecutar la mutación (mutate)
    isPending: boolean // Estado de carga (isPending)
    onSuccess: boolean // Función para manejar el éxito de la mutación (onSuccess)
}
