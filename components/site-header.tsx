"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigation = [
    { name: t("header.home"), href: "#" },
    { name: t("header.services"), href: "#services" },
    { name: t("header.forWho"), href: "#forWho" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.contact"), href: "#contact" },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full px-4 pt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-6 py-2 backdrop-blur-sm"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ehWeVwcxXaoYGQvGAc6JXkSjFEYRXL.webp"
            alt="BarberBUS Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-xl font-bold text-transparent">
            BarberBUS
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm text-gray-300 transition-colors hover:text-white group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher />
          <Button
            size="sm"
            className="bg-white text-black hover:bg-white/90"
            onClick={scrollToTop}
          >
            {t("hero.button")}
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageSwitcher />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex justify-end mb-8">
              <LanguageSwitcher />
            </div>
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </div>
  );
}
