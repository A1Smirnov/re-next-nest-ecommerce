import { useEffect, useState } from 'react';
import API from '../services/api';

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: 0, description: '' });

    useEffect(() => {
        API.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const addProduct = () => {
        API.post('/products', newProduct)
            .then(response => {
                setProducts([...products, response.data]);
                setNewProduct({ name: '', price: 0, description: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            <div>
                <h2>Add Product</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <button onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
}
