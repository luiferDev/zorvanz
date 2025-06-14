export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    stock: number;
    popularity: number;
    imageUrl: string;
}

export interface Category {
    categoryId: number;
    categoryName: string;
}

export interface PaginatedResponse {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Product[];
    number: number;
    sort: SortInfo;
    pageable: PageableInfo;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
}

interface SortInfo {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

interface PageableInfo {
    pageNumber: number;
    pageSize: number;
    sort: SortInfo;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}


export interface UseFragrancesState {
    fragrances: Product[]
    loading: boolean
    error: string | null
}

// Define the Product interface, including the quantity property
export interface Products {
    category: Category;
    stock: number
    id: number
    imageUrl: string
    price: number
    name: string
    quantity?: number
}

export interface CartContextType {
    cart: Products[];
    addToCart: (product: Products) => void
    clearCart: () => void
	removeFromCart: (product: Products) => void
	deleteFromCart: (product: Products) => void
}

export interface Filters {
    categoryName: string
    price: number
}

export interface FilterContextType {
    filters: {
        categoryName: string;
        price: number;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        categoryName: string;
        price: number;
    }>>
}

export interface ProductDefinition {
    id: number
    name: string
    imageUrl: string
    price: number
    description: string
    stock: number
    popularity: number
    category: Category
    selectedProduct?: number
}