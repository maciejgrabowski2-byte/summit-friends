import en from './en.json';
import fr from './fr.json';
import it from './it.json';
import es from './es.json';

export const locales = {
  en,
  fr,
  it,
  es,
} as const;

export type Locale = keyof typeof locales;
export type TranslationKeys = typeof en;

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'fr', 'it', 'es'];

export function getLocaleFromNavigator(): Locale {
  if (typeof navigator === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  
  if (supportedLocales.includes(browserLang as Locale)) {
    return browserLang as Locale;
  }
  
  return defaultLocale;
}
