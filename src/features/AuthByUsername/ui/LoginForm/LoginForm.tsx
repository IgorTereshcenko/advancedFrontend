import { useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

    const { t } = useTranslation()
    const [userName, setUserName] = useState('')

    const onChange = (value: string) => {
        setUserName(value)
        console.log(value)
    }

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                value={userName}
                onChange={onChange}
                autoFocus
                placeholder='Введите имя пользователя' />
            <Input
                type="text"
                className={cls.input}
                placeholder='Введите пароль' />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}
