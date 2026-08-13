// Translation utility
// Supports English (en) and Gujarati (gu) UI strings.
// Only UI labels are translated; scientific terms remain in English.
import en from "../translations/en.json";
import gu from "../translations/gu.json";

/**
 * Retrieve a translated string for the given key and language.
 * @param {string} key - The translation key defined in the JSON files.
 * @param {string} lang - Language code ('en' or 'gu'). Defaults to 'en'.
 * @returns {string} Translated text or the key itself if missing.
 */
export function translate(key, lang = "en") {
  const dictionaries = { en, gu };
  const dict = dictionaries[lang] || dictionaries["en"];
  return dict[key] || key;
}
