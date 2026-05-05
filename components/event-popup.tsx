"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventPopupProps {
  enabled: boolean;
  storageKey: string;
  delayMs?: number;
  logo?: string;
  logoAlt?: string;
  logoNode?: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  locationUrl?: string;
  locationButtonText?: string;
  buttonIcon?: React.ReactNode;
  confetti?: boolean;
}

export function EventPopup({
  enabled,
  storageKey,
  delayMs = 2000,
  logo,
  logoAlt = "",
  logoNode,
  title,
  subtitle,
  description,
  locationUrl,
  locationButtonText = "Zobacz lokalizację",
  buttonIcon,
  confetti = false,
}: EventPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => setIsVisible(true), delayMs);
    return () => clearTimeout(timer);
  }, [enabled, delayMs]);

  useEffect(() => {
    if (!isVisible || !confetti) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let secondSalvoTimer: ReturnType<typeof setTimeout> | null = null;

    import("canvas-confetti").then(({ default: fire }) => {
      if (cancelled) return;

      const shoot = (origin: { x: number; y: number }, angle: number) =>
        fire({
          particleCount: 60,
          angle,
          spread: 55,
          origin,
          colors: ["#ffffff", "#aaaaaa", "#555555", "#e0e0e0"],
          scalar: 0.9,
          gravity: 1.2,
          drift: 0,
        });

      shoot({ x: 0.1, y: 0.6 }, 60);
      shoot({ x: 0.9, y: 0.6 }, 120);

      secondSalvoTimer = setTimeout(() => {
        if (!cancelled) {
          shoot({ x: 0.2, y: 0.5 }, 70);
          shoot({ x: 0.8, y: 0.5 }, 110);
        }
      }, 300);
    });

    return () => {
      cancelled = true;
      if (secondSalvoTimer) clearTimeout(secondSalvoTimer);
    };
  }, [isVisible, confetti]);

  useEffect(() => {
    if (!isVisible || !confetti) return;

    let cancelled = false;

    import("canvas-confetti").then(({ default: fire }) => {
      if (cancelled) return;

      const shoot = (origin: { x: number; y: number }, angle: number) =>
        fire({
          particleCount: 60,
          angle,
          spread: 55,
          origin,
          colors: ["#ffffff", "#aaaaaa", "#555555", "#e0e0e0"],
          scalar: 0.9,
          gravity: 1.2,
          drift: 0,
        });

      shoot({ x: 0.1, y: 0.6 }, 60);
      shoot({ x: 0.9, y: 0.6 }, 120);

      setTimeout(() => {
        if (!cancelled) {
          shoot({ x: 0.2, y: 0.5 }, 70);
          shoot({ x: 0.8, y: 0.5 }, 110);
        }
      }, 300);
    });

    return () => {
      cancelled = true;
    };
  }, [isVisible, confetti]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative z-10 flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-2xl backdrop-blur-md max-h-[90dvh] sm:max-h-[85vh]"
          >
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-20 rounded-full bg-black/40 p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto overscroll-contain">
              {(logo || logoNode) && (
                <div className="flex justify-center pt-7 pb-1 sm:pt-8 sm:pb-2">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={logoAlt}
                      width={120}
                      height={120}
                      className="h-20 w-auto object-contain sm:h-24"
                    />
                  ) : (
                    logoNode
                  )}
                </div>
              )}

              <div className="px-5 pb-6 pt-3 text-center sm:px-6 sm:pb-8 sm:pt-4">
                <h2 className="mb-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {title}
                </h2>

                {subtitle && (
                  <p className="mb-3 text-sm font-medium text-primary sm:mb-4 sm:text-base">
                    {subtitle}
                  </p>
                )}

                <p className="mb-5 whitespace-pre-line text-sm leading-relaxed text-gray-300 sm:mb-6 sm:text-base">
                  {description}
                </p>

                {locationUrl && (
                  <Button
                    size="lg"
                    className="relative w-full overflow-hidden rounded-full border border-white/20 bg-white text-black shadow-lg transition-all hover:scale-[1.02] hover:bg-white/90 text-sm sm:text-base"
                    asChild
                  >
                    <a
                      href={locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      {buttonIcon ?? <MapPin className="h-4 w-4" />}
                      {locationButtonText}
                      <motion.div
                        className="absolute inset-0 bg-black/5"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
