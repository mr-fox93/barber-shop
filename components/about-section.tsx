"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function AboutSection() {
  const t = useTranslations();
  
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold tracking-tight">{t("about.title")}</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                {t("about.paragraph1")}
              </p>
              <p>
                {t("about.paragraph2")}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benjbusfoto-IqmhFQ9WhVUfKxBuiIdROBPSxOfBa8.jpeg"
                alt="Benji w BarberBUSie"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
