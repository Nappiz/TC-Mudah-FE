"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Course {
  title: string;
  description: string[];
  instructor: string;
  price: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Sistem Operasi (Teori)",
    description: [
      "Konsep dasar sistem operasi",
      "Manajemen proses",
      "Manajemen memori",
      "Sistem berkas",
    ],
    instructor: "Algof Kristian Zega (C27)",
    price: "$199",
    image: "/images/logo.png",
  },
  {
    title: "Sistem Operasi (Praktikum)",
    description: [
      "Implementasi proses",
      "Manajemen memori secara praktis",
      "Pengembangan sistem berkas",
      "Project akhir",
    ],
    instructor: "Gregorius Setiadharma (C27)",
    price: "$249",
    image: "/images/logo.png",
  },
  {
    title: "Struktur Data",
    description: [
      "Array dan Linked List",
      "Stack dan Queue",
      "Tree dan Graph",
      "Algoritma Pencarian dan Pengurutan",
    ],
    instructor: "Badruzzaman Nafiz(C27)",
    price: "$179",
    image: "/images/logo.png",
  },
  {
    title: "Kalkulus 2",
    description: [
      "Integrasi Lanjutan",
      "Deret Tak Hingga",
      "Persamaan Diferensial",
      "Aplikasi Kalkulus dalam Fisika",
    ],
    instructor: "Daffa Rinali (C27)",
    price: "$149",
    image: "/images/logo.png",
  },
  {
    title: "Komputasi Numerik",
    description: [
      "Metode Numerik Dasar",
      "Analisis Kesalahan",
      "Solusi Sistem Linear",
      "Interpolasi dan Ekstrapolasi",
    ],
    instructor: "Muhammad Rizal Haffiyan (C27)",
    price: "$189",
    image: "/images/logo.png",
  },
];

const Materi: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Materi <span className="text-blue-600">TC Mudah</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pilih mata kuliah yang sesuai untuk mengembangkan keterampilan Anda.
          </motion.p>
        </div>
      </header>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {course.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    <span className="font-medium">Pengajar:</span> {course.instructor}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Harga:</span> {course.price}
                  </p>
                  <Link href={`/daftar`} passHref>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition cursor-pointer"
                    >
                      Detail Materi
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materi;