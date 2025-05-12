"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Instagram, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const t = useTranslations();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phoneContact"),
      description: t("contact.phoneContactText"),
      href: "tel:+48660739882",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      descriptions: [
        {
          text: "ul. Rychtalska 16, Wrocław",
          href: "https://www.google.com/maps?q=ul.+Rychtalska+16,+Wrocław,+50-304",
        },
        {
          text: "ul. Królewiecka 66, Wrocław",
          href: "https://www.google.com/maps?q=ul.+Królewiecka+66,+Wrocław",
        },
      ],
      multipleItems: true,
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "@barberbus.pl",
      href: "https://www.instagram.com/barberbus.pl/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4">
        <motion.div
          className="flex flex-col space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-white text-center"
          >
            {t("contact.title")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((contactItem, index) => (
              <motion.div
                key={contactItem.title}
                variants={item}
                className="group flex flex-col rounded-lg border border-white/10 bg-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black">
                    <contactItem.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">
                      {contactItem.title}
                    </span>
                    {!contactItem.multipleItems ? (
                      <a
                        href={contactItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold group-hover:text-primary"
                      >
                        {contactItem.description}
                      </a>
                    ) : (
                      <div className="flex flex-col space-y-2 mt-1">
                        {contactItem.descriptions?.map((desc, i) => (
                          <a
                            key={i}
                            href={desc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold group-hover:text-primary hover:underline"
                          >
                            {desc.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
