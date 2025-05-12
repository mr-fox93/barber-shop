"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Scissors, Ruler, BeakerIcon as Beard, Sparkles } from "lucide-react";

export function ServicesSection() {
  const t = useTranslations();
  
  const services = [
    {
      title: t("services.classicCut.title"),
      description: t("services.classicCut.description"),
      icon: Scissors,
    },
    {
      title: t("services.buzzcut.title"),
      description: t("services.buzzcut.description"),
      icon: Ruler,
    },
    {
      title: t("services.beardStyling.title"),
      description: t("services.beardStyling.description"),
      icon: Beard,
    },
    {
      title: t("services.premiumPackage.title"),
      description: t("services.premiumPackage.description"),
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
            {t("services.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("services.description")}
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={item} className="h-full">
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
