import { cookies, headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const supportedLocales = ['en', 'pl'];
  const defaultLocale = 'pl';

  // Read locale from cookie set by language switcher
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value as string | undefined;

  // Read Accept-Language header (first preferred language)
  const headersList = await headers();
  const headerLocale = headersList.get('accept-language')?.split(',')[0].split('-')[0];

  let locale = localeCookie || headerLocale || defaultLocale;
  if (!supportedLocales.includes(locale)) locale = defaultLocale;

  const messages = (await import(`../messages/${locale}/index.json`)).default;

  return {
    locale,
    messages
  };
}); 