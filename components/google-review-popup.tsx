"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoogleReviewPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("reviewPopup");

  useEffect(() => {
    // Pokaż popup po 1 sekundzie od załadowania strony
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (mapsUrl: string) => {
    setIsVisible(false);
    // Użyj standardowego maps.google.com URL który automatycznie otwiera aplikację na mobile
    window.open(mapsUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2 md:bottom-20">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex w-[240px] flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 shadow-2xl backdrop-blur-sm md:h-12 md:w-[600px] md:flex-row md:justify-between md:gap-6 md:px-8 md:py-0"
          >
            {/* Przycisk zamknięcia dla mobile */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Zamknij"
            >
              <X className="h-3 w-3" />
            </button>

            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
              <div className="flex items-center gap-1.5">
                <p className="text-xs text-white/90 md:text-sm">
                  <span className="hidden md:inline">{t("question")} </span>{t("rateUs")}
                </p>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/google.png"
                    alt="Google"
                  width={100}
                  height={35}
                  className="h-6 w-auto object-contain md:h-8"
                  />
                </motion.div>
              </div>
              
              {/* Buttony dla mobile */}
              <div className="flex items-center gap-2 md:hidden">
                <Button
                  size="sm"
                  className="relative overflow-hidden rounded-full border border-white/30 bg-white text-black backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:bg-white/90 px-2.5 py-1 text-[10px] font-semibold"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps?q=Słoń+Beniamin+Barberbus,+Rychtalska+16,+50-304+Wrocław&ftid=0x470fe9cbb119bf73:0xbc1290d71bc753c3&entry=gps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("rychtalska")}
                  </a>
                </Button>

                <Button
                  size="sm"
                  className="relative overflow-hidden rounded-full border border-white/30 bg-white text-black backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:bg-white/90 px-2.5 py-1 text-[10px] font-semibold"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/place/Słoń+Beniamin+Barberbus/@51.1553275,16.9224082,17z/data=!3m1!4b1!4m6!3m5!1s0x470feb3c125dfa4d:0x338e26a0c8306cbe!8m2!3d51.1553275!4d16.9224082!16s%2Fg%2F11xd8lz121"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("krolewiecka")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Buttony dla desktop */}
            <div className="hidden items-center gap-2 md:flex">
              <Button
                size="sm"
                className="relative overflow-hidden rounded-full border border-white/30 bg-white text-black backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:bg-white/90 px-2 py-0.5 text-[9px] font-semibold"
                asChild
              >
                <a
                  href="https://www.google.com/search?client=opera&hs=aWI&sca_esv=e4e3b1ba951674fc&sxsrf=AE3TifNCjcrGXW0OTVzRc3OZhPNSeG_--g:1761058061277&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0IntkpLOHXfXahZQtgeAr_aDT-Ct_4oEj34wRf6AGOHZkQZahTIBtyAwK2IkYQFRqvIfLcCCXugW9WpuYBvUqUkA2_p7OVmA5dY53wrIuEFlkEhqA%3D%3D&q=Słoń+Beniamin+Barberbus+Opinie&sa=X&ved=2ahUKEwi_m6_BxLWQAxUW0QIHHbD_LhYQ0bkNegQIHxAE&biw=1410&bih=778&dpr=2#lrd=0x470fe9cbb119bf73:0xbc1290d71bc753c3,3,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsVisible(false)}
                >
                  Rychtalska
                </a>
              </Button>

              <Button
                size="sm"
                className="relative overflow-hidden rounded-full border border-white/30 bg-white text-black backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:bg-white/90 px-2 py-0.5 text-[9px] font-semibold"
                asChild
              >
                <a
                  href="https://www.google.com/search?client=opera&q=barber+bus+krolewiecka&sourceid=opera&ie=UTF-8&oe=UTF-8&lqi=ChZiYXJiZXIgYnVzIGtyb2xld2llY2thSMGIvImxvICACFogEAAQARACGAIiFmJhcmJlciBidXMga3JvbGV3aWVja2GSARJ1bmlzZXhfaGFpcmRyZXNzZXKaASRDaGREU1VoTk1HOW5TMFZKY1ZnM0xVaFVObk54VW01blJSQUKqAWkKDS9nLzExeGQ4bHoxMjEKCS9tLzAxMnF5YhABKg4iCmJhcmJlciBidXMoCzIfEAEiG5jP2tZ9-8_uCWqZ8ewT9aGilc0UNOYY_cluXTIaEAIiFmJhcmJlciBidXMga3JvbGV3aWVja2H6AQQIABBB#lkt=LocalPoiReviews&rlimm=3714949214622477502&lrd=0x470feb3c125dfa4d:0x338e26a0c8306cbe,3,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsVisible(false)}
                >
                  Królewiecka
                </a>
              </Button>

              <button
                onClick={() => setIsVisible(false)}
                className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Zamknij"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

