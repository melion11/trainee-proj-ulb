import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useCallback, useState} from 'react';
import {loginActions, LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthData, userActions} from 'entities/User';


interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const {t} = useTranslation('navbar')
    const dispatch = useDispatch()

    const authData = useSelector(getAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [setIsAuthModal])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [setIsAuthModal])

    const onLogOut = () => {
        dispatch(userActions.getLogout())
    }

    if (authData) {
        return <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onLogOut} theme={ButtonTheme.CLEAR} inverted>
                {t('logOut')}
            </Button>
        </div>
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onShowModal} theme={ButtonTheme.CLEAR} inverted>
                {t('signIn')}
            </Button>
            <LoginModal isOpen={isAuthModal} onCLose={onCloseModal}/>
        </div>
    );
};
