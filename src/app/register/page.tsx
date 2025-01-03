"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-xl transition duration-300 hover:shadow-2xl">
        {/* Logo atau Ilustrasi */}
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign up to start your journey
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                placeholder="********"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
          >
            Register
          </button>
        </form>
        <div className="mt-4 flex justify-between items-center">
          <a
            href="/login"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}
