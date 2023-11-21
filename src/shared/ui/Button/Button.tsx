import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import {FC, HTMLAttributes} from 'react';
import '../../../app/styles/index.scss';

export const enum ThemeButton  {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, ...restProps} = props


    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...restProps}>
            {children}
        </button>
    );
};