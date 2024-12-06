// frontend\app\components\Header.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import "./Header.css";

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Проверяем доступность localStorage перед использованием
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }
  }, []); // Выполняется только один раз при монтировании

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    router.push("/login"); // Перенаправление после выхода
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/products" },
    { text: "Categories", path: "/categories" },
    { text: "Cart", path: "/cart" },
    ...(isAuthenticated
      ? [
          { text: "Profile", path: "/profile" },
          { text: "Logout", action: handleLogout }, // Кнопка Logout только для авторизованных пользователей
        ]
      : [{ text: "Login", path: "/login" }]),
  ];

  return (
    <header className="bg-blue-600 text-white">
      <nav className="flex items-center justify-between p-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center text-white">
          <img
            src="/images/Logo.png" // Путь к логотипу в папке public
            alt="REMarket Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-2xl font-bold">REMarket</h1>
        </Link>

        {/* Кнопка меню для мобильных устройств */}
        <button
          className="block md:hidden text-white"
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Меню для десктопа */}
        <div className="hidden md:flex space-x-4">
          {menuItems
            .filter((item) => !item.action) // Только элементы с `path`, без `action`
            .map((item) => (
              <Link key={item.text} href={item.path} className="hover:underline">
                {item.text}
              </Link>
            ))}
        </div>
      </nav>

      {/* Мобильное меню */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white p-4 w-3/4 h-full">
            <button
              className="text-right text-gray-600"
              onClick={toggleDrawer}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="space-y-4 mt-4">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <button
                    className="w-full text-left p-2"
                    onClick={item.action ? item.action : toggleDrawer}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
