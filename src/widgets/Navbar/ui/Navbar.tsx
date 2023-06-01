import { classNames } from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import { useState, type FC, useCallback } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={classNames(cls.links)}
                onClick={onToggleModal}
                theme='clear_inverted'>
                {t('Войти')}
            </Button>
            <Modal isOpen = {isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, architecto ullam quidem pariatur saepe fuga ea sunt sapiente sed ex quibusdam deserunt ipsa dolorem hic voluptatibus repudiandae, voluptatem beatae atque?
            </Modal>
        </div>
    )
}
