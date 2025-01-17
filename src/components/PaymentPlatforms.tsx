"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const platforms = [
  {
    name: "PayPal",
    logo: "/images/paypal-logo.png",
    delay: 0.2,
  },
  {
    name: "Wise",
    logo: "/images/wise-logo.png",
    delay: 0.4,
  },
  {
    name: "Deel",
    logo: "/images/deel-logo.png",
    delay: 0.6,
  },
  {
    name: "Airbnb",
    logo: "/images/payoneer-logo.png",
    delay: 0.8,
  },
  {
    name: "Wallbit",
    logo: "/images/wallbit-animation.png",
    delay: 1,
  },
];

export default function PaymentPlatforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-12 mx-auto md:py-24 bg-[#dcf0f2] overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <div className="flex flex-col-reverse w-full lg:flex-row gap-8 items-center justify-center">
          <div className="flex justify-center">
            <motion.div
              className="flex bg-white rounded-full p-4 shadow-lg items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{
                    opacity: 0,
                    x: index === platforms.length - 1 ? 0 : -50,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {
                          opacity: 0,
                          x: index === platforms.length - 1 ? 0 : -50,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: platform.delay,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src={platform.logo || "/placeholder.svg"}
                      alt={platform.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.2,  }}
            className="ml-1 lg:ml-80"
          >
            <h2 className="text-3xl flex md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cobrar en dólares,
              <br className="hidden sm:inline mt-1" />
              convertir a pesos.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-max md:max-w-xl">
              Recibe pagos desde PayPal, Wise, Payoneer, Deel, Airbnb o
              cualquier otra plataforma. Retira en ARS, COL, MXN al mejor tipo
              de cambio y de forma instantánea.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
