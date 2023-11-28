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
            <h2 className={cls.loginTitle}>{t('signIn')}</h2>
            <div className={cls.fieldsWrap}>
                <Textfield id={'userName'} autoFocus label={'Username: '} placeholder={'Your username'}/>
                <Textfield id={'password'} label={'Password: '} placeholder={'Your password'} type={'password'}/>
            </div>
            <Button className={cls.signInBtn} theme={ButtonTheme.OUTLINE}>{t('signIn')}</Button>
        </form>
    );
};