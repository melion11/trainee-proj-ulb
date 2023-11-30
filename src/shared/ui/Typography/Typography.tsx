import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Typography.module.scss'

export enum TypographyVariant {
    LARGE = 'large',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    Body1 = 'body1',
    SUBTITLE1 = 'subtitle1',
    BODY2 = 'body2',
    SUBTITLE2 = 'subtitle2',
    CAPTION = 'caption',
    OVERLINE = 'overline',
    LINK1 = 'link1',
    LINK2 = 'link2',
    ERROR = 'error'
}


type TypographyProps<T extends ElementType> = {
    as?: T
    variant?: TypographyVariant
    children?: ReactNode
    className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>({
    as,
    variant = TypographyVariant.Body1,
    children,
    className,
    ...restProps
}: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {

    const Component = as || 'p'

    return (
        <Component className={classNames(cls[variant], {}, [className])} {...restProps}>
            {children}
        </Component>
    );
};
