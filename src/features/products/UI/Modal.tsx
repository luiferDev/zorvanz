import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '../../../components/ui/drawer'
import { Button } from '../../../components/ui/button'
import { useEffect, useState } from 'react'
import { ModalProps } from '../types/productsProps'

export function Modal({
    productName,
    id,
    onMutate,
    isPending,
    onSuccess,
}: ModalProps) {

	const [open, setOpen] = useState(false)
    useEffect(() => {
        // Ejecutamos la lógica de cierre SOLAMENTE cuando isSuccess es true
        if (onSuccess) {
			setOpen(false) 
        }
    }, [onSuccess]) // Depende únicamente del estado de éxito de la mutación

    const handleConfirmDelete = () => {
        onMutate(id)
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="destructive">Eliminar</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Eliminar Producto</DrawerTitle>
                        <DrawerDescription>
                            Esta acción eliminará un producto de la lista
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="flex-1 text-center">
                                <div className="text-2xl font-bold tracking-tighter">
                                    ¿Estás seguro de que quieres borrar el
                                    producto: {productName}?
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 h-[120px]"></div>
                    </div>
                    <DrawerFooter>
						<Button
							type='submit'
                            onClick={handleConfirmDelete}
                            disabled={isPending}
                        >
                            {isPending ? 'Eliminando...' : 'Eliminar'}
                        </Button>

                        <DrawerClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
