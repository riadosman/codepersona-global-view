
import { enTranslations } from './en';
import { arTranslations } from './ar';
import { trTranslations } from './tr';

export type TranslationKey = keyof typeof enTranslations;

export const translations = {
  en: enTranslations,
  ar: arTranslations,
  tr: trTranslations
};
