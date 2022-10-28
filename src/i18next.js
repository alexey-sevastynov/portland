import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ua',
    whitelist: ['ua', 'en'],
    debug: false,
    detection: {
        order: ['localStorage', 'cookie'],
        cache: ['localStorage', 'cookie']
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n;