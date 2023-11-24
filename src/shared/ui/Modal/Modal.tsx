import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss'
import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {Portal} from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({className, children, onClose, isOpen}: ModalProps) => {

    const [isClosed, setIsClosed] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    const classes = {
        modal: classNames(cls.Modal, {[cls.opened]: isOpen, [cls.closed]: isClosed}, [className]),
        overlay: cls.overlay,
        content: cls.content,
    }

    const onCloseHandler = useCallback(() => {
        if(onClose) {
            setIsClosed(true)
            timeRef.current = setTimeout(()=> {
                onClose()
                setIsClosed(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler()
        }
    }, [onCloseHandler])

    useEffect(()=>{
        window.addEventListener('keydown', onKeyDownHandler)

        return ()=> {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDownHandler)
        }
    }, [isOpen, onKeyDownHandler])

    const onContentCLickHandler = (e: React.MouseEvent)=> {
        e.stopPropagation()
    }

    return (
        <Portal>
            <div className={classes.modal}>
                <div className={classes.overlay} onClick={onCloseHandler}>
                    <div className={classes.content} onClick={onContentCLickHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};