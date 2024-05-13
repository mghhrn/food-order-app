import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose, className = '' }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current; //recommended to save this ref as a local variable to be safely used in clean-up function

        if (open) {
            modal.showModal();
        }

        return () => {
            modal.close()
        };
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}