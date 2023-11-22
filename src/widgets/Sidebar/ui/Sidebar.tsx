import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import {useState} from 'react';
import {LangSwitcher, ThemeSwitcher} from 'widgets';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import UnionLeft from '../../../shared/assets/icons/UnionLeft.svg'
import UnionRight from '../../../shared/assets/icons/UnionRight.svg'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import Home from '../../../shared/assets/icons/Home.svg'
import Info from '../../../shared/assets/icons/Info.svg'
import {RoutePath} from 'shared/config/routerConfig/routeConfig';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const {t} = useTranslation('sidebar')

    const classes = {
        sidebar: classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className]),
        switchers: classNames(cls.switchers, {[cls.collapsed]: collapsed}, []),
        toggleBtn: classNames(cls.toggleBtn, {}, []),
        links: cls.links
    }

    const getToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid="sidebar" className={classes.sidebar}>

            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}
                    className={cls.link}>
                    <div className={cls.linkIcon}>
                        <Home/>
                    </div>
                    {!collapsed && <span>{t('main')}</span>}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}
                    className={cls.link}
                >
                    <div className={cls.linkIcon}>
                        <Info />
                    </div>
                    {!collapsed && <span>{t('about')}</span>}
                </AppLink>
            </div>

            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={true}/>
            </div>
            <Button className={classes.toggleBtn}
                theme={ButtonTheme.CLEAR} inverted={true}
                fullWidth={true} data-testid="sidebar-toggle"
                onClick={getToggle}>{collapsed ? <UnionLeft/> : <UnionRight/>}</Button>


        </div>
    );
};