// pages/products.tsx

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
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      // Проверка, что data не равно null
      setProducts(data ?? []); // Если data == null, установить пустой массив
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (editingProduct) {
      const { data, error } = await supabase
        .from('products')
        .update({
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description,
        })
        .eq('id', editingProduct.id);
  
      if (error) {
        console.error('Error updating product:', error);
      } else {
        setProducts((prev) =>
          prev.map((p) => (p.id === editingProduct.id ? { ...p, ...newProduct } : p))
        );
        setEditingProduct(null);
        setNewProduct({ name: '', price: 0, description: '' });
      }
    } else {
      const { data, error } = await supabase.from('products').insert([newProduct]);
      if (error) {
        console.error('Error adding product:', error);
      } else {
        // Убедитесь, что data не null
        setProducts((prev) => [...prev, ...(data ?? [])]);
        setNewProduct({ name: '', price: 0, description: '' });
      }
    }
  };
  
  const removeProduct = async (id: number) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      console.error('Error deleting product:', error);
    } else {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };
  

  const startEditing = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({ name: product.name, price: product.price, description: product.description || '' });
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} <br />
            {product.description}
            <br />
            <button onClick={() => startEditing(product)}>Edit</button>
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
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
        <button onClick={addProduct}>{editingProduct ? 'Update Product' : 'Add Product'}</button>
      </div>
    </div>
  );
}
