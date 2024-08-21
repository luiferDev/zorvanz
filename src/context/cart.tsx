import React, { createContext, useState } from "react"

// Define the Product interface, including the quantity property
export interface Product {
    id: number
    imageUrl: string
    price: number
    name: string
    quantity?: number
}


// 1. create context with proper typing
interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void
    clearCart: () => void
    removeFromCart: (product: Product) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

// 2. create provider
export function CartProvider({ children }: React.PropsWithChildren) {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        // check if the product is already in the cart
        const productInCartIndex = cart.findIndex((item: Product) => item.id === product.id);

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            if (newCart[productInCartIndex].quantity) {
                newCart[productInCartIndex].quantity! += 1;
            } else {
                newCart[productInCartIndex].quantity = 1;
            }
            setCart(newCart);
        } else {
            setCart((prevState) => [
                ...prevState,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };


    const removeFromCart = (product: Product) => {
        setCart((prevState) => prevState.filter((item) => item.id !== product.id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
