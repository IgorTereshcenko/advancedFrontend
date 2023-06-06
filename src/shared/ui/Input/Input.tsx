import React, { type InputHTMLAttributes, type FC, memo, useState, useEffect, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autoFocus?: boolean
    placeholder?: string
}

// eslint-disable-next-line react/display-name
export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autoFocus,
        placeholder,
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            inputRef.current?.focus()
        }
    }, [autoFocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                className={cls.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={inputRef}
                autoFocus={isFocused}
                {...otherProps}/>
        </div>
    )
})
