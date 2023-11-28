import {Modal} from 'shared/ui/Modal/Modal';
import {LoginForm} from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import {classNames} from 'shared/lib/classNames/classNames';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onCLose: () => void
}

export const LoginModal = ({onCLose, isOpen}: LoginModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onCLose}>
            <LoginForm/>
        </Modal>
    );
};