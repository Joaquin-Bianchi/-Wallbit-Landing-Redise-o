"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, PlayIcon as PlayStore } from "lucide-react";

export default function Hero() {
  const floatingStocks = [
    {
      symbol: "AWS",
      price: "500",
      logo: "/images/aws-logo.png",
    },
    {
      symbol: "NVDA",
      price: "TSLA",
      logo: "/images/nvidia-logo.png",
    },
    {
      symbol: "MSFT",
      price: "AAPL",
      logo: "/images/microsoft-logo.png",
    },
  ];

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tu cuenta en <span className="text-gray-900">EE.UU.</span>
              <br />
              desde <span className="text-[#0d99ff]">LATAM</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Todas tus finanzas en dólares: Banking, Acciones,{" "}
              <span className="text-[#0d99ff]">ETFs</span> y U.S. Treasury
              Bills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0d99ff] text-white hidden md:block px-8 py-3 rounded-lg font-bold hover:bg-[#0d99ff] transition-colors"
              >
                Obtén tu cuenta en EE.UU
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-red-500 text-white m-auto w-1/2 hidden md:block px-1 py-1.5 rounded-lg shadow-lg"
            >
              <p className="text-center text-sm font-medium">
                ⚠️Web de demostración, no es el sitio oficial de Wallbit
              </p>
            </motion.div>
            <div className="flex gap-4 m-auto md:hidden">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg"
              >
                <Apple className="w-4 h-4" />
                <div>
                  <div className="text-xs">Download </div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg"
              >
                <PlayStore className="w-6 h-6" />
                <div>
                  <div className="text-xs">Download</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10">
              <Image
                src="/images/hero.webp"
                width={600}
                height={600}
                alt="App Screenshot"
                className="mx-auto"
              />
            </div>

            {floatingStocks.map((stock, index) => (
              <motion.div
                key={stock.symbol}
                className="absolute bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: ["0%", "2%", "0%"],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  top: `${20 + index * 30}%`,
                  left: index % 2 === 0 ? "-20%" : "80%",
                }}
              >
                <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center bg-white">
                  <Image
                    src={stock.logo}
                    alt={`${stock.symbol} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold">{stock.symbol}</div>
                  <div className="text-sm text-green-500">+2.4%</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
