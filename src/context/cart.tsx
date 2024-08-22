import React, { createContext, useReducer } from "react"
import { CartContextType, Product } from "../types/interfaces"

type AddToCartAction = {
    type: 'ADD_TO_CART';
    payload: Product;
}

type RemoveFromCartAction = {
    type: 'REMOVE_FROM_CART';
    payload: Product
}

type ClearCartAction = {
    type: 'CLEAR_CART';
}

type Action = AddToCartAction | RemoveFromCartAction | ClearCartAction;


// 1. create context with proper typing

export const CartContext = createContext<CartContextType | undefined>(undefined)

const initialState: Product[] = []

const reducer = (state: Product[] = initialState, action: Action): Product[] => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { id } = action.payload
            const productInCartIndex = state.findIndex((item: Product) => item.id === id);

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state);
                newState[productInCartIndex]
                    .quantity = (newState[productInCartIndex].quantity || 0) + 1
                return newState
            } else {
                return [...state, { ...action.payload, quantity: 1 }]
            }
        }
        case 'REMOVE_FROM_CART': {
            const { id } = action.payload
            const numberId = Number(id)
            return state.filter((item: Product) => item.id !== numberId)
        }
        case 'CLEAR_CART': {
            return initialState;
        }
        default:
            return state
    }
}

// 2. create provider
export function CartProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product: Product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product: Product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return (
        <CartContext.Provider
            value={{ cart: state, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
