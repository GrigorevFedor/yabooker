import {useState} from 'react'
import {Dialog} from '@headlessui/react'

export function MobileFilters({isOpen, onClose}) {

    return (
        <>
            <Dialog open={isOpen} onClose={() => onClose()}
                    className="fixed z-10 inset-0 overflow-y-auto w-full bg-white p-8">
                <Dialog.Overlay/>

                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data will
                    be permanently removed. This action cannot be undone.
                </p>

                <button onClick={() => onClose()}>Deactivate</button>
                <button onClick={() => onClose()}>Cancel</button>
            </Dialog>
        </>
    )
}