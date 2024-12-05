export default function Header() {
    return (
      <header className="p-4 bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Marketplace</h1>
          <nav>
            <a href="/products" className="px-3">
              Products
            </a>
            <a href="/cart" className="px-3">
              Cart
            </a>
          </nav>
        </div>
      </header>
    );
  }
  