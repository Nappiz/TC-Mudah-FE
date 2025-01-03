"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        {/* Brand Section */}
        <div>
          <h4 className="text-2xl font-bold">TC Mudah</h4>
          <p className="text-sm mt-4 leading-relaxed">
            Empowering learning for everyone, everywhere. Join us to make education accessible and effective.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold border-b-2 border-white pb-2 inline-block">Quick Links</h4>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/about" className="hover:underline hover:text-purple-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline hover:text-purple-300 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-purple-300 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline hover:text-purple-300 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold border-b-2 border-white pb-2 inline-block">Follow Us</h4>
          <p className="mt-4 text-sm">
            Stay connected through our social media channels.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 transition">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold border-b-2 border-white pb-2 inline-block">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <span className="font-semibold">Address:</span> Departemen Teknik Informatika ITS
            </li>
            <li>
              <span className="font-semibold">Phone:</span> (021) 123-4567
            </li>
            <li>
              <span className="font-semibold">Email:</span> info@tcmudah.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-white"></div>

      {/* Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TC Mudah. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
