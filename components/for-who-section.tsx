"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Car, Clock, Crown, CalendarCheck } from "lucide-react";

export function ForWhoSection() {
  const t = useTranslations();

  const features = [
    {
      icon: Clock,
      title: t("forWho.busyProfessionals.title"),
      description: t("forWho.busyProfessionals.description"),
    },
    {
      icon: Crown,
      title: t("forWho.specialEvents.title"),
      description: t("forWho.specialEvents.description"),
    },
    {
      icon: Car,
      title: t("forWho.elderlyOrDisabled.title"),
      description: t("forWho.elderlyOrDisabled.description"),
    },
    {
      icon: CalendarCheck,
      title: t("forWho.groups.title"),
      description: t("forWho.groups.description"),
    },
  ];

  return (
    <section id="forWho" className="relative overflow-hidden bg-gradient-to-b from-background/80 to-background py-12 md:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[700px] text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {t("forWho.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("forWho.description")}
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-primary/20 to-primary/0" />
              <div className="relative space-y-4 rounded-lg border bg-card p-6">
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </section>
  );
}
