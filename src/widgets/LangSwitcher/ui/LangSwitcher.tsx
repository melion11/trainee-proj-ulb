import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next';
import React from 'react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import enIcon from '../../../shared/assets/uk.png'
import ruIcon from '../../../shared/assets/russia.png'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={changeLanguage}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}>
            <div className={cls.languageWrap}>
                {i18n.language === 'ru' ? <img src={ruIcon} alt={'ru'}/> : <img src={enIcon} alt={'en'}/>}
                {t('language')}
            </div>
        </Button>
    );
};

