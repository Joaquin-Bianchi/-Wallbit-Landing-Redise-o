"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Security() {
  return (
    <section className="py-24 bg-zinc-900 ">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tu dinero e inversiones protegidos
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0d99ff] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="text-white text-lg">
                    Seguro de la <span className="underline">FDIC</span> en
                    cuentas checking de hasta US$250,000*.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#0d99ff] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="text-white text-lg">
                    Inversiones protegidas por el{" "}
                    <span className="underline">SIPC</span> hasta US$500,000.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/security.webp"
              width={500}
              height={400}
              alt="Security illustration"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
