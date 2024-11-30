import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import About from './about/About.tsx'
import ErrorPage from './error-page.tsx'
import ProductCatalog from './products/ProductCatalog.tsx'
import ProductInfo from './products/ProductInfo.tsx'
import ProducForm from './forms/ProducForm.tsx'


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
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
)
