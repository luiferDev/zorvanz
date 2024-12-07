import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import { useFilters } from '../hooks/useFilters';
import '../styles/productList.css';
import { motion } from 'framer-motion';
import { useFetchProducts } from '../hooks/useProducts';

export default function ProductList() {
    const { data, isLoading, isError } = useFetchProducts();
    const { filterProducts } = useFilters();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: producto no encontrado</div>;
    if (!data) return null;

    const filteredProducts = filterProducts(data);

    return (
        <>
            {filteredProducts.map(product => (
                <div className="product__container" key={product.id}>
                    <Link className="link" to={`/product-catalog/${product.id}`}>
                        <article className="product__list">
                            <motion.img
                                whileHover={{ scale: [null, 1.1], translateY: [0, -5, -4] }}
                                transition={{ duration: 0.3 }}
                                src={product.imageUrl || '/default-image.jpg'}
                                alt={product.name || 'Producto'}
                                className="product__img"
                            />
                            <div className="info__container">
                                <h3 className="product__title">{product.name}</h3>
                                <p>{product.category?.categoryName || 'Sin categoría'}</p>
                                {product.stock === 0 ? (
                                    <strong className="no__stock">Producto Agotado</strong>
                                ) : (
                                    <strong className="stock">Disponible</strong>
                                )}
                            </div>
                        </article>
                    </Link>
                    <div>
                        <hr className="product__hr" />
                        <div className="add__cart__product">
                            <p>${product.price}</p>
                            <CartButton product={product} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
