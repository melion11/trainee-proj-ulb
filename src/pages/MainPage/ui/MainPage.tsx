import React from 'react';
import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/ErrorBoundary/ui/BugButton';

const MainPage = () => {
    const {t} = useTranslation('mainPage')

    return (
        <div>
            {t('title')}
            <BugButton/>
        </div>
    );
};

export default MainPage