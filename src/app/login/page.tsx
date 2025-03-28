// src/app/login/page.tsx

"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext"; // Sesuaikan path jika perlu

export default function Login() {
  const router = useRouter();
  const { login } = useContext(AuthContext); // Menggunakan AuthContext
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Disarankan
        },
        body: JSON.stringify(formData),
      });

      // Jika response gagal
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login error:", errorData);
        toast.error(`Login failed: ${errorData.message || "Unknown error"}`);
        return;
      }

      // Jika sukses, ambil data
      const data = await response.json();
      console.log("Login success:", data);

      // Simpan token & user menggunakan AuthContext
      if (data.token && data.user) {
        login(data.user, data.token);
      } else {
        toast.error("Invalid response from server.");
        return;
      }

      // Tampilkan toast
      toast.success("Login success! Redirecting...");

      // Redirect ke home
      router.replace("/");
    } catch (error: any) {
      console.error("Login exception:", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-xl transition duration-300 hover:shadow-2xl">
        {/* Logo atau Ilustrasi */}
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Sign in to continue your journey
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                placeholder="********"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-between items-center">
          <a
            href="#"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
          >
            Forgot Password?
          </a>
          <a
            href="/register"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
