import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss'
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {

    const {t} = useTranslation('translation')

    const onReload = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('error')}</p>
            <Button onClick={onReload}>{t('reload')}</Button>
        </div>
    );
};