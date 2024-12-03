import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, description: '' });

  // Загружаем продукты при загрузке компонента
  useEffect(() => {
    const fetchProducts = async () => {
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
            console.error('Error fetching products:', error);
        } else if (data) {
            setProducts(data); // Устанавливаем продукты только если data не null
        }
    };

    fetchProducts();
}, []);

  // Добавление продукта
  const addProduct = async () => {
    const { data, error } = await supabase.from('products').insert([newProduct]);
    if (error) {
        console.error('Error adding product:', error);
    } else if (data) {
        setProducts([...products, ...data]); // Добавляем только если data не null
        setNewProduct({ name: '', price: 0, description: '' });
    }
};

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} <br />
            {product.description}
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
