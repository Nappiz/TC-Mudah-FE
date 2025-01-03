"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineLogin, AiOutlineUserAdd, AiOutlineClose, AiOutlineAccountBook,} from "react-icons/ai";
import { FaBook, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = document.getElementById("navbar");
      const menuButton = document.getElementById("menu-button");

      if(isMenuOpen && navbar && !navbar.contains(target) && menuButton && !menuButton.contains(target)) setIsMenuOpen(false);
    };

    if(isMenuOpen) document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "Home", icon: <AiOutlineHome /> },
    { href: "/login", label: "Login", icon: <AiOutlineLogin /> },
    { href: "/register", label: "Register", icon: <AiOutlineUserAdd /> },
    { href: "/materi", label: "Material", icon: <FaBook /> },
    { href: "/mentor", label: "Mentors", icon: <FaChalkboardTeacher />},
    { href: "/timeline", label: "Timeline", icon: <FaClock /> },
  ];

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
                  pathname === item.href
                    ? "border-b-2 border-blue-600 pb-1"
                    : ""
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
          {/* Daftar Button */}
          <li>
            <Link
              href="/daftar"
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Daftar
            </Link>
          </li>
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
              {/* Daftar Button */}
              <li>
                <Link
                  href="/daftar"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Daftar
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
