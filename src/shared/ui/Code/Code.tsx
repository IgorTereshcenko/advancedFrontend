import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copyIcon.svg'

interface CodeProps {
    className?: string
    text: string
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                onClick={onCopy}
                theme='clear'>
                <CopyIcon className={cls.copyIcon}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
})
