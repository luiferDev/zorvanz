import React, { createContext, useState, ReactNode } from "react";
import { FilterContextType } from "../types/interfaces";


export const FiltersContext = createContext<FilterContextType>({
    filters: {
        categoryName: 'all',
        price: 0
    },
    setFilters: () => {}
})

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState({
        categoryName: 'all',
        price: 0
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}
