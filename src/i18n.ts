import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEng from "./locales/en/translation.json";
import translationKo from "./locales/ko/translation.json";
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({

        resources: {
            en: {
                translations: translationEng,
            },
            ko: {
                translations: translationKo,
            },
        },
        fallbackLng: "en",
        lng: "ko",
        debug: false,

        //
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
