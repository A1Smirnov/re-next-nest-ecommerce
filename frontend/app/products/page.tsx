"use client";

// frontend/app/products/page.tsx

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { supabase } from "../../src/services/supabaseClient";

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, description: "", image: "" });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data ?? []);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addOrUpdateProduct = async () => {
    if (editingProduct) {
      const { error } = await supabase
        .from("products")
        .update({
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description,
          image: newProduct.image,
        })
        .eq("id", editingProduct.id);

      if (error) {
        console.error("Error updating product:", error);
      } else {
        setProducts((prev) =>
          prev.map((p) => (p.id === editingProduct.id ? { ...p, ...newProduct } : p))
        );
        setEditingProduct(null);
        setNewProduct({ name: "", price: 0, description: "", image: "" });
      }
    } else {
      const { data, error } = await supabase.from("products").insert([newProduct]);
      if (error) {
        console.error("Error adding product:", error);
      } else {
        setProducts((prev) => [...prev, ...(data ?? [])]);
        setNewProduct({ name: "", price: 0, description: "", image: "" });
      }
    }
  };

  const removeProduct = async (id: number) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      console.error("Error deleting product:", error);
    } else {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const startEditing = (product: Product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      price: product.price,
      description: product.description || "",
      image: product.image || "",
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={{
                name: product.name,
                price: product.price,
                image: product.image || "default-image-url.jpg",
              }}
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={() => startEditing(product)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => removeProduct(product.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={addOrUpdateProduct}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
}
