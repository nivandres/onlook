import './patch';
import { createTranslation } from 'intl-t';

export const { Translation, useTranslations } = createTranslation({
    locales: {
        en: () => import('../../messages/en.json'),
        es: () => import('../../messages/es.json'),
        ja: () => import('../../messages/ja.json'),
        ko: () => import('../../messages/ko.json'),
        zh: () => import('../../messages/zh.json'),
    },
});
