"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUp, DollarSign } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function RemuneredAccount() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 overflow-hidden bg-[#dad2ff]">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black leading-tight"
              variants={itemVariants}
            >
              Cuenta Remunerada en dólares
            </motion.h2>
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.div
                  className="mt-1 p-2 bg-[#f0de78] rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <DollarSign className="w-6 h-6 text-black" />
                </motion.div>
                <p className="text-xl text-gray-600">
                  Hace rendir tu dinero al igual que tus billeteras locales,
                  pero en dólares.
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.div
                  className="mt-1 p-2 bg-[#f0de78] rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="w-6 h-6 text-black" />
                </motion.div>
                <p className="text-xl text-gray-600">
                  Invertida únicamente en instrumentos del gobierno de los
                  Estados Unidos para mayor seguridad.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/account-img.webp"
              alt="Cuenta Remunerada"
              width={600}
              height={400}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
