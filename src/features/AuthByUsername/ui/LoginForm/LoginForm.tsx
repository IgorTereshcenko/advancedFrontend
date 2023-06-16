import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/LoginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    LoginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {

    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)
    const error = useSelector(getLoginError)

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
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={true}>
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
