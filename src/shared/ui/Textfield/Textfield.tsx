import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Textfield.module.scss'
import {ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface TextfieldProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
    autoFocus?: boolean
}

export const Textfield = memo((props: TextfieldProps) => {
    const {className, id, label, value, onChange, type = 'text', disabled, autoFocus, ...restProps} = props

    const [isFocused, setIsFocused] = useState(false)
    const ref = useRef()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value)
    }

    useEffect(()=> {
        if(autoFocus) {
            setIsFocused(true)
        }
    }, [autoFocus])

    return (
        <div className={cls.textfieldWrap}>
            <label htmlFor={id}>{label}</label>
            <input onChange={onChangeHandler}
                value={value}
                className={classNames(cls.Textfield, {}, [className])}
                type={type}
                disabled={disabled}
                id={id}
                autoFocus={isFocused}
                {...restProps}
            />
        </div>
    );
});

Textfield.displayName = 'Textfield';