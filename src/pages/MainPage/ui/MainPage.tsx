import React from 'react';
import {useTranslation} from 'react-i18next';

const MainPage = () => {
    const {t, i18n} = useTranslation('mainPage')

    return (
        <div>
            {t('title')}
        </div>
    );
};

export default MainPage