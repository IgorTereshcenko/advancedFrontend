import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { useState, type FC, useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/redux'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const dispatch = useAppDispatch()

    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const logOut = useCallback(() => {
        setIsAuthModal(false)
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    className={classNames(cls.links)}
                    onClick={logOut}
                    theme='clear_inverted'>
                    {t('Выйти')}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={classNames(cls.links)}
                onClick={authData ? logOut : onShowModal}
                theme='clear_inverted'>
                {authData ? t('Выйти') : t('Войти') }
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}/>
        </div>
    )
})
