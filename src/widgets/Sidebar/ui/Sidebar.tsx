import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import {useState} from 'react';
import {LangSwitcher, ThemeSwitcher} from 'widgets';
import {useTranslation} from 'react-i18next';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const {t} = useTranslation()

    const getToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div  data-testid="sidebar"  className={
            classNames(cls.Sidebar,
                {[cls.collapsed]: collapsed}, [className])}>
            <button data-testid="sidebar-toggle" onClick={getToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};