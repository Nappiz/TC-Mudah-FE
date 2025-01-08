"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface Mentor {
  name: string;
  title: string;
  experience: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

const mentors: Mentor[] = [
  {
    name: "Gregorius Setiadharma",
    title: "Sistem Operasi (Praktikum)",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem facere reprehenderit eligendi ad ducimus perferendis! Iusto dignissimos molestiae voluptatem.",
    image: "/images/logo.png",
    social: {
      linkedin: "https://linkedin.com/in/siti-aisyah",
      twitter: "https://twitter.com/siti_aisyah",
    },
  },
  {
    name: "Algof Kristian Zega",
    title: "Sistem Operasi (Teori)",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem facere reprehenderit eligendi ad ducimus perferendis! Iusto dignissimos molestiae voluptatem.",
    image: "/images/logo.png",
    social: {
      linkedin: "https://linkedin.com/in/budi-santoso",
      facebook: "https://facebook.com/budi.santoso",
    },
  },
  {
    name: "Badruzzaman Nafiz",
    title: "Struktur Data",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem facere reprehenderit eligendi ad ducimus perferendis! Iusto dignissimos molestiae voluptatem.",
    image: "/images/logo.png",
    social: {
      linkedin: "https://linkedin.com/in/maya-dewi",
      twitter: "https://twitter.com/maya_dewi",
      facebook: "https://facebook.com/maya.dewi",
    },
  },
  {
    name: "Daffa Rinali",
    title: "Kalkulus 2",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem facere reprehenderit eligendi ad ducimus perferendis! Iusto dignissimos molestiae voluptatem.",
    image: "/images/logo.png",
    social: {
      linkedin: "https://linkedin.com/in/rizky-pratama",
      twitter: "https://twitter.com/rizky_pratama",
    },
  },
  {
    name: "Muhammad Rizal Haffiyan",
    title: "Komputasi Numerik",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem facere reprehenderit eligendi ad ducimus perferendis! Iusto dignissimos molestiae voluptatem.",
    image: "/images/logo.png",
    social: {
      linkedin: "https://linkedin.com/in/linda-kartika",
      facebook: "https://facebook.com/linda.kartika",
    },
  },
];

interface MentorCardProps {
  mentor: Mentor;
  index: number;
  size?: "small" | "large";
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, index, size = "small" }) => (
  <motion.div
    className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-${
      size === "large" ? "10" : "12"
    } flex flex-col items-center text-center ${
      size === "large" ? "w-full" : "w-full md:w-1/2"
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div
      className={`mb-4 relative ${
        size === "large" ? "w-32 h-32" : "w-40 h-40"
      } mx-8 my-8`}
    >
      <Image
        src={mentor.image}
        alt={mentor.name}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
        priority
      />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mx-2 my-2">{mentor.name}</h3>
    <p className="text-blue-600 mb-2 mx-2 my-2">{mentor.title}</p>
    <p className="text-gray-600 mb-4 text-sm sm:text-base mx-2 my-2">{mentor.experience}</p>
    <div className="flex space-x-4 mx-8 my-8">
      {mentor.social.linkedin && (
        <a
          href={mentor.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${mentor.name} LinkedIn`}
        >
          <FaLinkedin size={20} className="text-blue-700 hover:text-blue-800 transition" />
        </a>
      )}
      {mentor.social.twitter && (
        <a
          href={mentor.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${mentor.name} Twitter`}
        >
          <FaTwitter size={20} className="text-blue-500 hover:text-blue-600 transition" />
        </a>
      )}
      {mentor.social.facebook && (
        <a
          href={mentor.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${mentor.name} Facebook`}
        >
          <FaFacebook size={20} className="text-blue-600 hover:text-blue-700 transition" />
        </a>
      )}
    </div>
  </motion.div>
);

const MentorsPage: React.FC = () => {
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
            Meet Our <span className="text-blue-600">Expert Mentors</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our mentors are experienced leaders with extensive experience to help you succeed.
          </motion.p>
        </div>
      </header>

      {/* Mentors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16 space-y-12">
          {/* Top Row - 2 Mentors */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {mentors.slice(0, 2).map((mentor, index) => (
              <MentorCard mentor={mentor} key={mentor.name} index={index} size="small" />
            ))}
          </div>

          {/* Middle Row - 1 Large Mentor */}
          <div className="flex justify-center">
            <div className="w-full">
              <MentorCard mentor={mentors[2]} index={2} size="large" />
            </div>
          </div>

          {/* Bottom Row - 2 Mentors */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {mentors.slice(3, 5).map((mentor, index) => (
              <MentorCard mentor={mentor} key={mentor.name} index={index + 3} size="small" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorsPage;
