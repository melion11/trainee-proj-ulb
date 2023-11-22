import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next';
import React from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation('translation');

    const changeLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };


    const classes = {
        langSwitcher: classNames(cls.LangSwitcher, {}, [className, short && cls.collapsed]),
        languageWrap: classNames(cls.languageWrap, {}, [])
    }

    return (
        <Button onClick={changeLanguage}
                theme={ButtonTheme.CLEAR}
                className={classes.langSwitcher}>
            <div className={classes.languageWrap}>
                <span>{short ? t('shortLanguage') : t('language')}</span>
            </div>
        </Button>
    );
};

