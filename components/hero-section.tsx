"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { ReusableButton } from "@/components/reusable-button";

interface BookingButtonConfig {
  id: string;
  href: string;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  ariaLabel?: string;
  labelClassName?: string;
  imageClassName?: string;
  className: string;
  shineClassName: string;
  desktopWidthClassName: string;
  shineDelay?: number;
}

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations();
  const bookingButtons: BookingButtonConfig[] = [
    {
      id: "rychtalska",
      href: "https://n1244849.alteg.io/company/1189391/personal/select-services?o=",
      label: "ul. Rychtalska 16",
      className:
        "relative w-full overflow-hidden rounded-full border border-white/30 bg-white/5 px-6 py-5 text-lg font-semibold text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all hover:scale-105 hover:bg-white/25 md:border-transparent md:bg-white md:text-black md:shadow-lg md:backdrop-blur-md md:hover:bg-white/90",
      shineClassName: "bg-white/10 md:bg-black/5",
      desktopWidthClassName: "sm:w-[220px] md:w-[250px]",
    },
    {
      id: "krolewiecka",
      href: "https://n1357118.alteg.io/company/1295664/personal/select-services?o=m2827825",
      label: "ul. Królewiecka 66",
      className:
        "relative w-full overflow-hidden rounded-full border border-white/30 bg-white/5 px-6 py-5 text-lg font-semibold text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all hover:scale-105 hover:bg-white/25 md:border-transparent md:bg-white md:text-black md:shadow-lg md:backdrop-blur-md md:hover:bg-white/90",
      shineClassName: "bg-white/10 md:bg-black/5",
      desktopWidthClassName: "sm:w-[220px] md:w-[250px]",
      shineDelay: 0.5,
    },
    {
      id: "ks-maslice",
      href: "https://www.instagram.com/ksmaslicewroclaw/",
      label: "MECZE",
      imageSrc: "/442.png",
      imageAlt: "442",
      labelClassName: "text-white font-semibold",
      className:
        "relative w-full overflow-hidden rounded-full border border-white/30 bg-[#FFBF00] px-6 py-5 text-lg font-semibold text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all hover:scale-105 hover:bg-[#FFBF00]/90 md:border-transparent md:bg-[#FFBF00] md:text-white md:shadow-lg md:backdrop-blur-md",
      shineClassName: "bg-white/10",
      desktopWidthClassName: "sm:w-[220px] md:w-[250px]",
      shineDelay: 0.25,
    },
    {
      id: "runmageddon",
      href: "https://book.plandok.com/pl/barberbus",
      label: "RUNMAGEDON",
      ariaLabel: "RUNMAGEDON",
      labelClassName: "text-white font-semibold",
      className:
        "relative w-full overflow-hidden rounded-full border border-white/30 bg-[#ffdd00] px-6 py-5 text-lg font-semibold text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-[#ffdd00]/90",
      shineClassName: "bg-black/10",
      desktopWidthClassName: "sm:w-[220px] md:w-[250px]",
      shineDelay: 0.75,
    },
  ];

  return (
    <section className="relative">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="/barberbustwo.jpg"
            alt="BarberBUS Mobilny Salon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-3xl px-4 text-center sm:px-0"
        >
          <div className="flex flex-col space-y-6">
            {/* Desktop buttons */}
            <div className="hidden md:flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              {bookingButtons.map((button) => (
                <ReusableButton
                  key={button.id}
                  size="lg"
                  href={button.href}
                  target="_blank"
                  label={button.label}
                  imageSrc={button.imageSrc}
                  imageAlt={button.imageAlt}
                  ariaLabel={button.ariaLabel}
                  labelClassName={button.labelClassName}
                  imageClassName={button.imageClassName}
                  className={`${button.className} ${button.desktopWidthClassName} animate-pulse-slow md:animate-none`}
                  shine
                  shineClassName={button.shineClassName}
                  shineDelay={button.shineDelay}
                />
              ))}
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex justify-center">
              <ReusableButton
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden rounded-full border border-white/70 bg-[#fffff6] text-black backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] px-6 py-5 text-lg font-semibold transition-all hover:scale-105 hover:bg-white/90 w-[280px]"
                label={t("hero.button")}
                shine
                shineClassName="bg-white/30"
                shineDuration={2}
                shineRepeatDelay={1}
              />
            </div>

            {/* Desktop "Zamów z dojazdem" button */}
            {/* Temporarily disabled - service not currently offered */}
            {/* <div className="hidden md:block mt-2 md:mt-4">
              <Button
                size="lg"
                className="relative w-full overflow-hidden rounded-full border-2 border-primary/40 bg-transparent text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.15)] md:border-primary/60 md:bg-black/5 md:text-white md:backdrop-blur-lg px-6 py-5 text-lg font-semibold transition-all hover:scale-105 hover:border-primary/90 hover:bg-black/30 sm:w-[300px] md:w-[340px] animate-pulse-slow md:animate-none"
                asChild
              >
                <a
                  href="https://n1244849.alteg.io/company/1189391/personal/select-services?o="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.buttonMobile")}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                      delay: 1,
                    }}
                  />
                </a>
              </Button>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-sm rounded-2xl bg-background/95 p-6 shadow-xl backdrop-blur-md border border-white/10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              {t("hero.button")}
            </h2>
            <div className="space-y-4">
              {bookingButtons.map((button) => (
                <ReusableButton
                  key={button.id}
                  size="lg"
                  href={button.href}
                  target="_blank"
                  label={button.label}
                  imageSrc={button.imageSrc}
                  imageAlt={button.imageAlt}
                  ariaLabel={button.ariaLabel}
                  labelClassName={button.labelClassName}
                  imageClassName={button.imageClassName}
                  className={button.className}
                  shine
                  shineClassName={button.shineClassName}
                  shineDelay={button.shineDelay}
                />
              ))}
              {/* Temporarily disabled - service not currently offered */}
              {/* <Button
                size="lg"
                className="relative w-full overflow-hidden rounded-full border-2 border-primary/40 bg-transparent text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.15)] px-6 py-5 text-lg font-semibold transition-all hover:scale-105 hover:border-primary/90 hover:bg-black/30"
                asChild
              >
                <a
                  href="https://n1244849.alteg.io/company/1189391/personal/select-services?o="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.buttonMobile")}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                      delay: 1,
                    }}
                  />
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
