"use client";

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartContext";

const daftarItems = [
  {
    id: 1,
    title: "Paket ALL IN",
    price: 150000,
    description: "lorem ipsum dolor sit amet.",
    image: "/images/logo.png",
  },
  {
    id: 2,
    title: "Paket 1",
    price: 200000,
    description: "lorem ipsum dolor sit amet.",
    image: "/images/logo.png",
  },
  {
    id: 3,
    title: "Paket 2",
    price: 120000,
    description: "lorem ipsum dolor sit amet.",
    image: "/images/logo.png",
  },
  {
    id: 4,
    title: "Paket 3",
    price: 100000,
    description: "lorem ipsum dolor sit amet.",
    image: "/images/logo.png",
  },
  {
    id: 5,
    title: "Paket 4",
    price: 130000,
    description: "lorem ipsum dolor sit amet.",
    image: "/images/logo.png",
  },
  {
    id: 6,
    title: "Paket 5",
    price: 180000,
    description: "lorem ipsum dolor sit amet.",
    image: "/images/logo.png",
  },
];

const Daftar: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Pendaftaran TC Mudah</h1>
            <Cart />
          </div>
        </header>

        {/* Item Cards */}
        <main className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {daftarItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
};

export default Daftar;
