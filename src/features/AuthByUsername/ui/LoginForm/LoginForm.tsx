import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import {Textfield} from 'shared/ui/Textfield/Textfield';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {Typography, TypographyVariant} from 'shared/ui/Typography/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from 'features/AuthByUsername';
import {getLoginState} from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import {loginByUsername} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import {useCallback} from 'react';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation('login')

    const dispatch: any = useDispatch()
    const {username, password, error, isLoading} = useSelector(getLoginState)

    console.log(error)
    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername({username}))
    },[dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword({password}))
    },[dispatch])

    const getLogin = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    },[dispatch, username, password])

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Typography variant={TypographyVariant.H2}
                as={'h2'}
                className={cls.loginTitle}>{t('signIn')}
            </Typography>
            <div className={cls.fieldsWrap}>
                <Textfield id={'username'}
                    autoFocus
                    value={username}
                    onChange={onChangeUsername}
                    label={`${t('username')}: `}
                    placeholder={'Your username'}/>
                <Textfield id={'password'}
                    label={`${t('password')}: `}
                    value={password}
                    onChange={onChangePassword}
                    placeholder={'Your password'}
                    type={'password'}/>
                {error && <Typography variant={TypographyVariant.ERROR} as={'p'}>
                    {error}
                </Typography>}
            </div>
            <Button className={cls.signInBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={getLogin}
                disabled={isLoading}
            >
                {t('signIn')}</Button>
        </form>
    );
};