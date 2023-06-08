import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginByUsername } from '../../model/services/LoginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks/redux'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text thema='primary' text={t('Форма авторизации')}/>
            {error && <Text thema='error' text={t('Вы ввели неверный логин или пароль')}/>}
            <Input
                type="text"
                className={cls.input}
                autoFocus
                value={username}
                onChange={onChangeUsername}
                placeholder='Введите имя пользователя' />
            <Input
                type="text"
                className={cls.input}
                value={password}
                onChange={onChangePassword}
                placeholder='Введите пароль' />
            <Button
                className={cls.loginBtn}
                theme='outline'
                onClick={onLoginClick}
                disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    )
})
