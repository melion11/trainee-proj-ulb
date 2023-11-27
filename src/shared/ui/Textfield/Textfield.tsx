import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Textfield.module.scss'
import {ChangeEvent, FC, InputHTMLAttributes, memo} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface TextfieldProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Textfield= memo((props: TextfieldProps) => {
    const {className, value, onChange, type = 'text', disabled, ...restProps} = props


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value)
    }

    return (
        <input onChange={onChangeHandler}
            value={value}
            className={classNames(cls.Textfield, {}, [className])}
            type={type}
            disabled={disabled} {...restProps}
        />
    );
});

Textfield.displayName = 'Textfield';