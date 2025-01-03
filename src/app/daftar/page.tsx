"use client";

import { useState } from "react";

export default function Daftar() {
  const [formData, setFormData] = useState({
    nama: "",
    nrp: "",
    jurusan: "",
    paket: " ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Data Pendaftaran:\nNama: ${formData.nama}\nNRP: ${formData.nrp}\nJurusan: ${formData.jurusan}\nPaket: ${formData.paket}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-xl transition duration-300 hover:shadow-2xl">
        {/* Logo atau Ilustrasi */}
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Form Pendaftaran
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Daftar untuk memulai perjalanan belajar Anda
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <div className="relative">
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">NRP</label>
            <div className="relative">
              <input
                type="text"
                name="nrp"
                value={formData.nrp}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                placeholder="Masukkan NRP"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Jurusan</label>
            <div className="relative">
              <select
                name="jurusan"
                value={formData.jurusan}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                required
              >
                <option value="">Pilih Jurusan</option>
                <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                <option value="Rekayasa Kecerdasan Artifisial">Rekayasa Kecerdasan Artifisial</option>
                <option value="Teknik Informatika">Teknik Informatika</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Paket</label>
            <div className="relative">
              <select
                name="paket"
                value={formData.paket}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-gray-600"
                required
              >
                <option value="">Pilih Paket</option>
                <option value="ALLIN">Paket ALL IN</option>
                <option value="Paket1">Paket 1</option>
                <option value="Paket2">Paket 2</option>
                <option value="Paket3">Paket 3</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
