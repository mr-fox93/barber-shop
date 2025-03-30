"use client";

import { motion } from "framer-motion";
import { Car, Clock, Crown, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Oszczędność Czasu",
    description:
      "Przyjeżdżamy do Twojej lokalizacji, oszczędzając Twój cenny czas.",
  },
  {
    icon: Crown,
    title: "Usługa Premium",
    description: "Luksusowe doświadczenie barberskie w prywatnym otoczeniu.",
  },
  {
    icon: Car,
    title: "Mobilna Wygoda",
    description: "W pełni wyposażony mobilny salon pod Twoimi drzwiami.",
  },
  {
    icon: CalendarCheck,
    title: "Łatwa Rezerwacja",
    description: "Prosty proces rezerwacji - wybierz adres, datę i godzinę.",
  },
];

export function ForWhoSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background/80 to-background py-12 md:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[700px] text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Dla kogo jest BarberBUS?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dla tych, którzy cenią prywatność, czas i prestiż. Przenosimy
            doświadczenie barbershopu do wybranej przez Ciebie lokalizacji.
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
