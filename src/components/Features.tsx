"use client";
import { DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { FeatureCard } from "./cards/FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: DollarSign,
    title: "Banking",
    subtitle: "Cuenta en EE.UU. a tu nombre",
    description:
      "Recibe dinero con tu cuenta bancaria personal en Estados Unidos.",
    color: "#0d99ff",
  },
  {
    icon: PiggyBank,
    title: "Ahorrar",
    subtitle: "Cuenta Remunerada en dólares",
    description:
      "Hace rendir tu dinero al igual que tus billeteras locales, pero en dólares. Invertida únicamente en instrumentos del gobierno de los Estados Unidos para mayor seguridad.",
    color: "#956ee4",
  },
  {
    icon: TrendingUp,
    title: "Invertir",
    subtitle: "De Latinoamérica a Wall Street",
    description:
      "Invierte desde $1 en acciones y ETFs de las empresas más populares con tu cuenta de inversión basada en los Estados Unidos.",
    color: "#8dcbd3",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#0d99ff1a,transparent)]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mt-16 sm:mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
            ¿Cómo te ayudamos?
          </h2>
        </motion.div>
        <motion.div
          className="flex justify-center gap-8 md:gap-20 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex justify-center gap-8 md:gap-20 flex-wrap"
              variants={itemVariants}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
