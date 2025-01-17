"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "Spotify Premium",
    icon: "/images/spotify-logo.png",
    localPrice: 2999,
    wallbitPrice: 1999,
    color: "#0000",
  },
  {
    name: "Netflix",
    icon: "/images/netflix-logo.png",
    localPrice: 3999,
    wallbitPrice: 2999,
    color: "#fffff",
  },
  {
    name: "Game Pass",
    icon: "/images/xbox-logo.png",
    localPrice: 2499,
    wallbitPrice: 1799,
    color: "#107C10",
  },
  {
    name: "Yt Music",
    icon: "/images/yt-logo.png",
    localPrice: 2999,
    wallbitPrice: 1999,
    color: "#FF0000",
  },
];

export default function ServiceComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-[#dcf0f2] to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Paga el precio real de tus servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Con Wallbit, evita los costos extra y paga el valor real de tus
            servicios digitales favoritos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-lg duration-300 transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.name}
                        width={40}
                        height={40}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {service.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <div className="text-sm text-gray-500">
                        Con tarjeta local
                      </div>
                      <div className="text-lg font-bold text-red-700">
                        ${service.localPrice}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Con Wallbit</div>
                      <div className="text-lg font-bold text-[#0d99ff]">
                        ${service.wallbitPrice}
                      </div>
                    </div>
                    <div className="sm:hidden">
                      <p className="text-sm text-gray-500">Ahorro</p>
                      <div className="text-lg font-bold text-green-500">
                        ${service.localPrice - service.wallbitPrice}
                      </div>
                    </div>
                  </div>

                  <div className="items-center sm:flex-row hidden sm:flex justify-between gap-2">
                    <div>
                      <p className="text-sm text-gray-500">Ahorro</p>
                      <div className="text-lg font-bold text-green-600">
                        ${service.localPrice - service.wallbitPrice}
                      </div>
                    </div>
                    <div className="bg-green-50 px-3 py-1 rounded-full">
                      <span className="text-green-600 font-medium">
                        {Math.round(
                          (1 - service.wallbitPrice / service.localPrice) * 100
                        )}
                        % menos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: services.length * 0.1 }}
          className="text-center mt-12"
        >
          <button className="bg-[#0d99ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0d99ff]/90 transition-colors">
            Obtén tu tarjeta Wallbit
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Sin costos ocultos. El precio que ves es el que pagas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
