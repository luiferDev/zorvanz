import { useEffect } from 'react';
import { ProductDefinition, useProductsStore } from '../store/useProductsStore';

const LL = ({ info }: { info: ProductDefinition[] }) => {
    return (
        <>
            {info.map(i => (
                <div key={i.id}>
                    {i.name}
                    <p>{i.price}</p>
                </div>
            ))}
        </>
    )
}

export default function PP() {
    const products = useProductsStore((state) => state.products);
    const fetchProducts = useProductsStore((state) => state.fetchProducts);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]); // Llama a la API al montar el componente

    return (
        <>
            <LL info={products} />
        </>
    );
}
