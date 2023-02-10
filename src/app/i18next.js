import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import translationEN from '../locales/en/translation.json';
import translationVI from '../locales/vi/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
const resources = {
	en: {
		translation: translationEN
	},
	vi: {
		translation: translationVI
	}
};

i18next
	.use(initReactI18next) // passes i18n down to react-i18next
	// .use(LanguageDetector)
	.init({
		resources: resources,
		// lng: "en", // if you're using a language detector, do not define the lng option
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		}
	});

export default i18next;
