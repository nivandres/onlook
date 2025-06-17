import { createNavigation } from 'intl-t/navigation';
import { allowedLocales } from './locales';

export const { middleware } = createNavigation({
    allowedLocales,
    strategy: 'headers',
    pathBase: 'detect-latest',
});
