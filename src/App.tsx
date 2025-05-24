import { Route, Routes } from 'react-router'
import Home from './UI/Home'
import About from './about/About'
import ProductCatalog from './products/ProductCatalog'
import LoginPage from './Auth/LoginPage'
import ProductInfo from './products/ProductInfo'
import ProducForm from './forms/ProducForm'
import ShoppingCart from './components/ShoppingCart'
import ErrorPage from './error-page'

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
