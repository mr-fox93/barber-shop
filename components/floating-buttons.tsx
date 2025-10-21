"use client";

import { motion } from "framer-motion";
import { Calendar, Instagram, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 md:h-12 md:w-12"
          onClick={scrollToTop}
        >
          <Calendar className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">Umów wizytę</span>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      >
        <Button
          size="icon"
          variant="outline"
          className="h-12 w-12 rounded-full shadow-lg md:h-12 md:w-12"
          asChild
        >
          <a
            href="https://www.instagram.com/barberbus.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">Obserwuj na Instagramie</span>
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
