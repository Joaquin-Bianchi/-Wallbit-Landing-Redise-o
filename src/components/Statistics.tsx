"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, BarChart, ShieldCheck } from "lucide-react";

const stats = [
  { id: 1, name: "Usuarios activos en LATAM", value: "35k+", icon: Users },
  { id: 2, name: "Comisión por transacción", value: "0%", icon: DollarSign },
  {
    id: 3,
    name: "Disponibilidad del servicio",
    value: "24 x 7",
    icon: ShieldCheck,
  },
  { id: 4, name: "Transacciones procesadas", value: "$1m+", icon: BarChart },
];

export function Statistics() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0d99ff] to-[#0056b3] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-[#0d99ff]">
            Nuestro impacto
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            La plataforma financiera de confianza en la región
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Wallbit está transformando la manera en que LATAM maneja sus
            finanzas, ofreciendo acceso a cuentas en EE.UU., inversiones
            diversificadas y transacciones seguras, todo desde una única
            plataforma intuitiva.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {stats?.map((stat) => (
            <motion.div
              key={stat.id}
              className="flex flex-col gap-y-3 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <dt className="text-sm font-semibold leading-6 text-gray-400">
                <div className=" text-3xl flex items-center gap-2 font-semibold tracking-tight text-white">
                  <span>{stat.value}</span>

                  <stat.icon
                    className="h-7 w-7 text-white bg-[#0d99ff] rounded-full p-1"
                    aria-hidden="true"
                  />
                </div>
                <span>{stat.name}</span>
              </dt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
