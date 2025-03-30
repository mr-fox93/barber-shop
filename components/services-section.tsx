"use client";

import { motion } from "framer-motion";
import { Scissors, Ruler, BeakerIcon as Beard, Sparkles } from "lucide-react";

const services = [
  {
    title: "Klasyczne Cięcie",
    description:
      "Tradycyjne strzyżenie łączące pracę nożyczkami i maszynką z płynnymi przejściami skin fade.",
    icon: Scissors,
  },
  {
    title: "Buzzcut",
    description:
      "Krótkie cięcie maszynką z charakterystycznym przejściem skin fade.",
    icon: Ruler,
  },
  {
    title: "Stylizacja Brody",
    description:
      "Profesjonalne przycinanie i stylizacja brody, dopasowane do kształtu Twojej twarzy.",
    icon: Beard,
  },
  {
    title: "Pakiet Premium",
    description:
      "Kompletna usługa stylizacji włosów i brody podczas jednej sesji.",
    icon: Sparkles,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[700px] text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Nasze Usługi
          </h2>
          <p className="mt-4 text-muted-foreground">
            Profesjonalne usługi barberskie świadczone w wybranej przez Ciebie
            lokalizacji
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item} className="h-full">
              <div className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 flex-grow text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
