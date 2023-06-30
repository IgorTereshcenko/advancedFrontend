import { memo, type FC, useMemo, type ChangeEvent } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    readonly?: boolean
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {

    const { className, label, options, value, onChange, readonly } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsList = useMemo(() => {
        return (
            options?.map(opt => (
                <option
                    key={opt.value}
                    value={opt.value}>
                    {opt.content}
                </option>
            ))
        )
    }, [options])

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (<span className={cls.label}>{label}</span>)}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}>
                {optionsList}
            </select>
        </div>
    )
})
