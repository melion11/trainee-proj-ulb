import React, {useTransition} from 'react';
import {useTranslation} from 'react-i18next';

const AboutPage = () => {

    const {t, i18n} = useTranslation('aboutPage')

    return (
        <div>
            {t('title')}
        </div>
    );
};

export default AboutPage