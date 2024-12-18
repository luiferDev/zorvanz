import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../error-page';
import About from '../about/About';
import ProductCatalog from '../products/ProductCatalog';
import ProductInfo from '../products/ProductInfo';
import ProducForm from '../forms/ProducForm';
import LoginPage from '../Auth/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/product-catalog',
        element: <ProductCatalog />,
    },
    {
        path: '/product-catalog/:id',
        element: <ProductInfo />,
    },
    {
        path: '/add-product',
        element: <ProducForm />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

export default router;