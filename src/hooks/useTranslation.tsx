import * as React from 'react';
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { locales, Locale, defaultLocale, getLocaleFromNavigator, TranslationKeys } from '@/locales';

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Check localStorage first, then detect from browser
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale;
      if (saved && Object.keys(locales).includes(saved)) {
        return saved;
      }
    }
    return getLocaleFromNavigator();
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = locales[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = locales[defaultLocale];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }, [locale]);

  useEffect(() => {
    // Update document lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

export { type Locale } from '@/locales';
