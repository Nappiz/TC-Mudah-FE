// src/app/components/navbar/navbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBook, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext"; // Pastikan path benar

interface MenuItem {
  href: string;
  label: string;
  icon: React.ReactElement;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { user, logout } = useContext(AuthContext); // Menggunakan AuthContext

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null); // Tetapkan tipe ref sebagai HTMLDivElement

  // Tutup menu dan dropdown saat berpindah halaman
  useEffect(() => {
    setIsMenuOpen(false);
    setShowDropdown(false);
  }, [pathname]);

  // Klik di luar dropdown untuk menutupnya
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // Definisikan menuItems dengan kondisi yang tepat
  const menuItems: MenuItem[] = [
    { href: "/", label: "Home", icon: <AiOutlineHome /> },
    { href: "/materi", label: "Material", icon: <FaBook /> },
    { href: "/mentor", label: "Mentors", icon: <FaChalkboardTeacher /> },
    { href: "/timeline", label: "Timeline", icon: <FaClock /> },
  ];

  // Tambahkan 'Daftar' hanya jika pengguna sudah login
  if (user) {
    menuItems.push({ href: "/daftar", label: "Daftar", icon: <AiOutlineUserAdd /> });
  }

  // Tambahkan 'Login' hanya jika pengguna belum login
  if (!user) {
    menuItems.push({ href: "/login", label: "Login", icon: <AiOutlineLogin /> });
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="TC Mudah Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="ml-2 text-xl font-bold text-blue-600">
            TC Mudah
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center text-blue-600 hover:text-blue-800 transition ${
                  pathname === item.href ? "border-b-2 border-blue-600 pb-1" : ""
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}

          {/* Jika sudah login -> tampilkan nama user & avatar */}
          {user && (
            <li className="relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                {/* Avatar bisa diganti dengan URL avatar user jika tersedia */}
                <Image
                  src="/images/logo.png" // Ganti dengan avatar user jika ada
                  alt="Profile Avatar"
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                />
                <span className="text-blue-600 font-medium">{user.name}</span>
              </button>
              {/* Dropdown */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    ref={dropdownRef} // Tetapkan ref ke <motion.div>
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="lg:hidden text-blue-600 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <AiOutlineClose /> : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="navbar"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-4 py-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center text-blue-600 hover:text-blue-800 transition ${
                      pathname === item.href ? "font-semibold" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Jika sudah login -> tampilkan nama user & avatar di mobile */}
              {user && (
                <>
                  <li className="flex items-center space-x-2">
                    <Image
                      src="/images/logo.png" // Ganti dengan avatar user jika ada
                      alt="Profile Avatar"
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                    <span className="text-blue-600 font-medium">{user.name}</span>
                  </li>
                  {/* Tombol Logout di mobile */}
                  <li>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-md transition"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
