import axios from '../api/auth'

export const updateProduct = async (
	id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    stock: number,
    categoryId: number,
    popularity: number,
) => {
    const response = await axios.patch(`/Product/${id}`, {
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
    console.log('Producto actualizado:', response.data)
    alert('Producto actualizado exitosamente!')
    return response.data
}
