"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Instagram, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function ContactSection() {
  const t = useTranslations();
  // Use state to control when animations should start
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    // Delay the animation start slightly to avoid flickering during initial load
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4">
        <div className="mb-8 mx-auto max-w-[700px] text-center">
          <h2 className="text-4xl font-bold text-white">
            {t("contact.title")}
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {contactInfo.map((contactItem, index) => (
            <div 
              key={contactItem.title}
              className="group flex flex-col rounded-lg border border-white/10 bg-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 h-full"
              style={{
                opacity: shouldAnimate ? 1 : 0,
                transform: shouldAnimate ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`
              }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
