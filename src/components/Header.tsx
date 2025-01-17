"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=""
            >
              <img
                width="auto"
                src="https://wallbit.io/assets/logo-wallbit-fe8a4ef0.svg"
                height="25"
                alt="logo wallbit"
              ></img>
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-800 hover:text-[#0d99ff] transition-colors"
            >
              Sobre nosotros
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-[#0d99ff] transition-colors"
            >
              Seguridad
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-[#0d99ff] transition-colors"
            >
              Centro de ayuda
            </Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0d99ff] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0d99ff]/90 transition-colors"
          >
            Regístrate
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
