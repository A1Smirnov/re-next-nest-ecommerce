export default function ProductCard({ product }: { product: { name: string; price: number; image: string } }) {
    return (
      <div className="border rounded p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
      </div>
    );
  }
  