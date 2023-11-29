import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react';


export enum TypographyVariant {
    LARGE = 'large',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    Body1 = 'body1',
    Subtitle1 = 'subtitle1',
    Body2 = 'body2',
    Subtitle2 = 'subtitle2',
    Caption = 'caption',
    Overline = 'overline',
    Link1 = 'link1',
    Link2 = 'link2'
}


type TypographyProps<T extends ElementType> = {
    as?: T
    variant?: TypographyVariant
    children?: ReactNode
    className: string
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
        <Component className={className} {...restProps}>
            {children}
        </Component>
    );
};
