"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es Wallbit?",
    answer: (
      <>
        A través de Wallbit y nuestros partners, puedes acceder a una cuenta
        bancaria en Estados Unidos y la posibilidad de abrir una cuenta de
        inversión basada en los Estados Unidos donde podrás invertir en
        acciones, <span className="text-[#0d99ff]">ETFs</span> y Bonos del
        Tesoro.
      </>
    ),
  },
  {
    question: "¿Cuales son los requisitos para abrir mi cuenta?",
    answer:
      "Los requisitos incluyen ser mayor de edad, tener un documento de identidad válido y residir en uno de los países donde operamos.",
  },
  {
    question: "¿Qué costos existen?",
    answer:
      "Ofrecemos una estructura de costos transparente con comisiones competitivas. Consulta nuestra página de tarifas para más detalles.",
  },
  {
    question: "¿Dónde está registrado Wallbit?",
    answer:
      "Wallbit está debidamente registrado y regulado en las jurisdicciones donde opera, cumpliendo con todas las normativas aplicables.",
  },
  {
    question: "¿Mis fondos están seguros?",
    answer:
      "Sí, tus fondos están protegidos por múltiples capas de seguridad y respaldados por instituciones financieras reguladas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 flex justify-between items-start text-left"
              >
                <span className="text-xl font-bold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 ml-4 mt-1" />
                ) : (
                  <ChevronDown className="flex-shrink-0 ml-4 mt-1" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-gray-600 text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
