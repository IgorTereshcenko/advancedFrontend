import React, { type ReactNode, type FC, useState, useRef, useEffect, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/themeProvider'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy: boolean
}

const ANIMATION__DELAY = 300

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [isOpening, setIsOpening] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const { theme } = useTheme()

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
        return () => {
            setIsMounted(false)
        }
    }, [isOpen])

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION__DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsOpening(true)
            }, 0)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => {
            setIsOpening(false)
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, { [cls.opened]: isOpening, [cls.isClosing]: isClosing }, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={(e: React.MouseEvent) => { e.stopPropagation() }}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
