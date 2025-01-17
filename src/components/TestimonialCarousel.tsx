"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Emprendedora",
    image: "",
    quote:
      "Wallbit ha transformado la manera en que manejo mis finanzas internacionales. ¡Es increíblemente fácil de usar!",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Freelancer",
    image: "",
    quote:
      "Gracias a Wallbit, puedo recibir pagos de clientes internacionales sin complicaciones. ¡Es un cambio de juego!",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Inversionista",
    image: "",
    quote:
      "La facilidad para invertir en acciones de EE.UU. desde LATAM es asombrosa. Wallbit ha simplificado todo el proceso.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24  overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Lo que dicen nuestros clientes
        </motion.h2>
        <div className="relative h-[400px]">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
                  index === currentIndex ? "z-20" : "z-10"
                }`}
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  rotateY: index === currentIndex ? 0 : 90,
                  scale: index === currentIndex ? 1 : 0.8,
                  z: index === currentIndex ? 0 : -100,
                }}
                exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto text-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-xl text-gray-600 mb-4">
                    {testimonial.quote}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
