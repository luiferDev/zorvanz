import axios from '../api/zorvanz-api'

export const createProduct = async (
	name: string,
	price: number,
	description: string,
	imageUrl: string,
	stock: number,
	categoryId: number,
	popularity: number,
) => {
	const response = await axios.post(`/Product`, {
		headers: {
			'Content-Type': 'application/json',
		},
		name,
		price,
		description,
		imageUrl,
		stock,
		categoryId,
		popularity,
	})
	console.log('Producto registrado:', response.data)
	alert('Producto registrado exitosamente!')
	return response.data
}