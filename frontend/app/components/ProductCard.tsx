// frontend/app/components/ProductCard.tsx
import React from "react";

interface Product {
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

const ProductCard: React.FC<{ product: Product; onEdit: () => void; onRemove: () => void }> = ({ product, onEdit, onRemove }) => {
  return (
    <div className="product-card border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-white flex flex-col h-full">
      <div className="h-48 overflow-hidden rounded mb-4">
        <img
          src={product.image || "default-image-url.jpg"}
          alt={product.name}
          className="w-full h-full object-contain" // Используем object-contain для fit
        />
      </div>
      <h2 className="text-lg font-bold truncate mt-4">{product.name}</h2>
      <p className="text-primary font-semibold text-xl">${product.price.toFixed(2)}</p>
      {product.category && (
        <p className="text-sm text-gray-500">Category: {product.category}</p>
      )}
      {product.description && (
        <p className="text-sm text-gray-600 mt-2 truncate">{product.description}</p>
      )}
      <div className="mt-4 flex justify-between">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={onRemove}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

