'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function useLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    // Set cookie to persist locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return {
    currentLocale: locale,
    switchLocale,
    locales: ['en', 'pl']
  };
} 