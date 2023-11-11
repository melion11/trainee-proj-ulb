import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import LightIcon from '../../../shared/assets/icons/theme_light'
import DarkIcon from '../../../shared/assets/icons/theme_dark'


interface ThemeSwitcherProps {
    className?: string

}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {toggleTheme, theme} = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}
                className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};