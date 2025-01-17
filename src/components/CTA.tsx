"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0d99ff]">
      <div className="mx-auto container px-6 py-24 sm:py-32">
        <div className="relative z-10 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="">
            <motion.h2
              className="text-4xl mb-20 md:mb-0 font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              ¿Listo para comenzar? <br />
              Abre tu cuenta hoy mismo.
            </motion.h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Obtén tu cuenta en EE.UU
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
