"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
const countries = [
  { name: "Argentina", icon: "/images/arg.webp" },
  { name: "Colombia", icon: "/images/col.webp" },
  { name: "México", icon: "/images/mex.webp" },
];

function FromLatam() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1546863340-7e4e97e46f42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="brightness-50 absolute inset-0  -z-10 h-full w-full object-cover brightness-50"
      />

      <motion.div
        className="mt-16 sm:mt-24 lg:mt-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Desde LATAM a Estados Unidos{" "}
            <Image
              src="/images/usa.webp"
              alt="United States flag"
              width={52}
              height={34}
              className="inline-block ml-2"
            />
          </h2>
          <p className="mt-4 text-xl leading-8 text-white">
            Disponible para residentes de
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-8">
          {countries?.map((country) => (
            <motion.div
              key={country.name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={country.icon}
                alt={`${country.name} flag`}
                width={58}
                height={48}
                className="rounded-full"
              />
              <p className="mt-2 text-base font-medium text-white">
                {country.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default FromLatam;
