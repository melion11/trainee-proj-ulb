import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import {FC, HTMLAttributes} from 'react';


export const enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

export const enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    fullWidth?: boolean
    inverted?: boolean
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        inverted, fullWidth,
        disabled
        , size,
        ...restProps
    } = props

    const classes = {
        button: classNames(cls.Button, {},
            [
                className, cls[theme], cls[size],
                fullWidth && cls.fullWidth, inverted && cls.inverted,
                disabled && cls.disabled
            ])
    }


    return (
        <button className={classes.button} disabled={disabled} {...restProps}>
            {children}
        </button>
    );
};