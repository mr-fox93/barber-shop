'use client';

import { useLocaleSwitcher } from "@/hooks/use-locale-switcher";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { currentLocale, switchLocale, locales } = useLocaleSwitcher();
  const t = useTranslations("languageSwitch");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <GlobeIcon className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={
              currentLocale === locale
                ? "bg-muted cursor-default font-medium"
                : "cursor-pointer"
            }
          >
            {t(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 