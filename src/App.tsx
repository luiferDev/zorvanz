import { Route, Routes } from 'react-router'
import Home from './UI/Home.tsx'
import About from './about/About.tsx'
import ProductCatalog from './features/products/components/ProductCatalog.tsx'
import LoginPage from './Auth/LoginPage.tsx'
import ProductInfo from './features/products/components/ProductInfo.tsx'
import ProducForm from './features/products/UI/ProducForm.tsx'
import ShoppingCart from './components/ShoppingCart.tsx'
import ErrorPage from './error-page.tsx'
import Profile from './Auth/Profile.tsx'
import Dashboard from './Auth/Dashboard.tsx'
import Register from './Auth/Register.tsx'
import RegisterAdmin from './Auth/RegisterAdmin.tsx'
import ProductUpdateForm from './features/products/UI/UpdateProductForm.tsx'
import SuccessEmailVerified from './SuccessEmailVerified.tsx'
import { ProtectedRoute } from './UI/ProtectedRoute.tsx'
import { useAuthStore } from './store/auth'
import { Role } from './types/interfaces'

function App() {
    const user = useAuthStore((state) => state.profile)
    const isAuth = useAuthStore((state) => state.isAuth)
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/product-catalog/:id" element={<ProductInfo />} />
            <Route path="/add-product" element={<ProducForm />} />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute
                        isAuth={isAuth}
                        user={user!}
                        allowedRoles={[Role.User]}
                    >
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute
                        isAuth={isAuth}
                        user={user!}
                        allowedRoles={[Role.Admin]}
                    >
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route path="/register" element={<Register />} />
            <Route
                path="/register-admin"
                element={
                    <ProtectedRoute
                        isAuth={isAuth}
                        user={user!}
                        allowedRoles={[Role.Admin]}
                    >
                        <RegisterAdmin />
                    </ProtectedRoute>
                }
            />
            <Route path="/update-product/:id" element={<ProductUpdateForm />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/verified-email" element={<SuccessEmailVerified />} />
            <Route
                path="/verified-email/:token"
                element={<SuccessEmailVerified />}
            />
        </Routes>
    )
}

export default App
