import { UUID } from "crypto"

export interface Products {
	category: Category
	stock: number
	id: UUID
	imageUrl: string
	price: number
	name: string
	quantity?: number
}

export interface Product {
	id: UUID
	name: string
	description: string
	price: number
	category: Category
	stock: number
	popularity: number
	imageUrl: string
}

export interface Category {
    categoryId: number
    categoryName: string
}

export interface PaginatedResponse {
	data: Product[]
	pageNumber: number
	pageSize: number
	totalPages: number
	totalRecords: number
}

export interface ProductDefinition {
	id: UUID
	name: string
	imageUrl: string
	price: number
	description: string
	stock: number
	popularity: number
	category: Category
	selectedProduct?: number
}