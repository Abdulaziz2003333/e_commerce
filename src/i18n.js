import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'uz',
        debug: true,
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false,
        },
        ns: ['translation'],
        backend: {
            loadPath: 'src/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;
