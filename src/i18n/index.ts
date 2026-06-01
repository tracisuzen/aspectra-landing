import { en, tr, type Translations } from "./translations";

const translations: Record<string, Translations> = { en, tr };

export function t(lang: string): Translations {
  return translations[lang] ?? en;
}

export type { Translations };