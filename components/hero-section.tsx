"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bus-ttufD8Em12JqPmOOB0U4lL4M82MoR7.webp"
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
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button
                size="lg"
                className="relative w-full overflow-hidden rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:border-transparent md:bg-white md:text-black md:shadow-lg md:backdrop-blur-md px-6 py-5 text-lg font-semibold transition-all hover:scale-105 hover:bg-white/25 md:hover:bg-white/90 sm:w-[220px] md:w-[250px] animate-pulse-slow md:animate-none"
                asChild
              >
                <a
                  href="https://n1244849.alteg.io/company/1189391/personal/select-services?o=m2673067"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ul. Rychtalska 16
                  <motion.div
                    className="absolute inset-0 bg-white/10 md:bg-black/5"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  />
                </a>
              </Button>

              <Button
                size="lg"
                className="relative w-full overflow-hidden rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] md:border-transparent md:bg-white md:text-black md:shadow-lg md:backdrop-blur-md px-6 py-5 text-lg font-semibold transition-all hover:scale-105 hover:bg-white/25 md:hover:bg-white/90 sm:w-[220px] md:w-[250px] animate-pulse-slow md:animate-none"
                asChild
              >
                <a
                  href="https://n1357118.alteg.io/company/1295664/personal/select-services?o=m2827825"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ul. Królewiecka 66
                  <motion.div
                    className="absolute inset-0 bg-white/10 md:bg-black/5"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                      delay: 0.5,
                    }}
                  />
                </a>
              </Button>
            </div>

            <div className="mt-2 md:mt-4">
              <Button
                size="lg"
                className="relative w-full overflow-hidden rounded-full border-2 border-primary/40 bg-transparent text-white backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.15)] md:border-primary/60 md:bg-black/5 md:text-white md:backdrop-blur-lg px-6 py-5 text-lg font-semibold transition-all hover:scale-105 hover:border-primary/90 hover:bg-black/30 sm:w-[300px] md:w-[340px] animate-pulse-slow md:animate-none"
                asChild
              >
                <a
                  href="https://n1244849.alteg.io/company/1189391/personal/select-services?o=m2673067"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zamów z dojazdem do Ciebie
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
