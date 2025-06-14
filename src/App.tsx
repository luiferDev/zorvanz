import { Route, Routes } from 'react-router'
import Home from './UI/Home.tsx'
import About from './about/About.tsx'
import ProductCatalog from './products/ProductCatalog.tsx'
import LoginPage from './Auth/LoginPage.tsx'
import ProductInfo from './products/ProductInfo.tsx'
import ProducForm from './forms/ProducForm.tsx'
import ShoppingCart from './components/ShoppingCart.tsx'
import ErrorPage from './error-page.tsx'

function App() {
    return (
        <Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/product-catalog" element={<ProductCatalog />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/cart" element={<ShoppingCart />} />
			<Route path="/product-catalog/:id" element={<ProductInfo />} />
			<Route path="/add-product" element={<ProducForm />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
    )
}

export default App
