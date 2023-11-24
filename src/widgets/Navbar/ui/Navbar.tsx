import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Modal} from 'shared/ui/Modal/Modal';
import {useCallback, useState} from 'react';


interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const {t} = useTranslation('navbar')

    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [setIsAuthModal])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={toggleModal} theme={ButtonTheme.CLEAR} inverted>
                {t('signIn')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={toggleModal}>
                AAA
            </Modal>
        </div>
    );
};
