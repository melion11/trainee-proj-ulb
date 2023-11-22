import type {Preview} from '@storybook/react';

import i18n from './i18n';
import '../../src/app/styles/index.scss';

const preview: Preview = {
    globals: {
        locale: 'en',
    },
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        i18n,
    },

};

export default preview;
