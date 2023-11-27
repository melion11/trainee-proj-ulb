import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import {Textfield} from 'shared/ui/Textfield/Textfield';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation('login')

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Textfield placeholder={'Your username'}/>
            <Textfield placeholder={'Your password'} type={'password'}/>
            <Button theme={ButtonTheme.OUTLINE}>{t('signIn')}</Button>
        </form>
    );
};