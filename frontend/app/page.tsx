// frontend\app\page.tsx

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <h1 className="text-center text-3xl font-bold mt-10">
          Welcome to Your Marketplace!
        </h1>
        <p className="text-center text-gray-500 mt-4">
          Discover the best products curated for you.
        </p>
      </main>
      <Footer />
    </div>
  );
}
