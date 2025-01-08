// src/app/page.tsx (atau sesuai struktur proyek Anda)

"use client";

import { motion } from "framer-motion";
import { FaBook, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"; // Sesuaikan path jika perlu
import { useRouter } from "next/navigation"; // Impor useRouter

const Home: React.FC = () => {
  const { user } = useContext(AuthContext); // Mengakses 'user' dari AuthContext
  const router = useRouter(); // Inisialisasi router

  return (
    <div>
      {/* Header Section */}
      <header className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center">
          <motion.div
            className="text-center lg:text-left lg:w-1/2 w-full mb-12 lg:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Transform Your Learning with{" "}
              <span className="text-blue-600">TC Mudah</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Gain access to expertly curated courses, experienced mentors, and the flexibility
              to learn on your terms. Empower your journey today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
                onClick={() => router.push(user ? "/daftar" : "/login")} // Menggunakan router.push
              >
                {user ? "Join Now" : "Login"} {/* Kondisional rendering */}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-100 text-blue-600 font-medium rounded-md shadow-md hover:bg-gray-200 transition flex items-center justify-center"
                onClick={() => router.push("/learn-more")}
              >
                Learn More <FiChevronRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/logo.png" // Ganti dengan ilustrasi hero yang relevan
              alt="Learning Illustration"
              width={320}
              height={320}
              className="w-3/4 max-w-md mx-auto lg:mx-0"
              priority
            />
          </motion.div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-blue-600">TC Mudah</span>?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
            {[
              {
                title: "Structured Material",
                description: "Expertly designed for ease of learning.",
                icon: <FaBook size={40} className="text-blue-600" />,
                backgroundImage: "/images/material.png",
                link: "/materi",
              },
              {
                title: "Expert Mentors",
                description: "Learn directly from experienced mentors.",
                icon: <FaChalkboardTeacher size={40} className="text-blue-600" />,
                backgroundImage: "/images/mentor.png",
                link: "/mentor",
              },
              {
                title: "Learn Anytime",
                description: "Flexible schedules that fit your lifestyle.",
                icon: <FaClock size={40} className="text-blue-600" />,
                backgroundImage: "/images/timeline.png",
                link: "/timeline",
              },
            ].map((feature, index) => (
              <Link href={feature.link} key={index}>
                <motion.div
                  className="relative p-16 bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Background Image dengan efek blur */}
                  <div className="absolute inset-0">
                    <Image
                      src={feature.backgroundImage}
                      alt={feature.title}
                      layout="fill"
                      objectFit="cover"
                      className="filter blur-sm opacity-20"
                      priority
                    />
                  </div>
                  {/* Konten Foreground */}
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Qurrata A`yun Kamil",
                feedback:
                  "The structure and content of TC Mudah are exceptional. It's exactly what I needed.",
                image: "/images/student1-modern.jpg",
              },
              {
                name: "Mahirah Yasmin Aulia Mawahib",
                feedback: "The flexibility to learn anytime has been a game-changer for me.",
                image: "/images/student2-modern.jpg",
              },
              {
                name: "James Lee",
                feedback: "The instructors are incredibly knowledgeable and supportive.",
                image: "/images/student3-modern.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic text-center">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-bold text-gray-800 text-center">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white text-gray-800 text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Elevate Your Skills?
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl font-light max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of learners who are transforming their lives with TC Mudah. Take the
            first step today.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
            onClick={() => router.push(user ? "/daftar" : "/login")} // Menggunakan router.push
          >
            {user ? "Join Now" : "Login"} {/* Kondisional rendering */}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
