const API_URL = `http://localhost:3000/products`

export default async () => {
    return await fetch(`${API_URL}`)
    .then((response)=> response.json())
}