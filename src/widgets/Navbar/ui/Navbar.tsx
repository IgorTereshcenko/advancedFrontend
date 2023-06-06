import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { useState, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={classNames(cls.links)}
                onClick={onShowModal}
                theme='clear_inverted'>
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}/>
        </div>
    )
}
