import { type FC } from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy>
            <LoginForm/>
        </Modal>
    )
}
