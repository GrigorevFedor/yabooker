import {FaInfoCircle, FaTimes, FaWhatsapp} from "react-icons/fa";
import {Popover, Transition } from "@headlessui/react";
import {useEffect, useRef, useState} from "react";
import {usePopper} from 'react-popper'

export default function WidgetContact() {
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let {styles, attributes} = usePopper(referenceElement, popperElement)

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop)

    const [clickState, setClickState] = useState(false)

    const onClick = () => {
        if (!clickState) {
            setClickState(true)
        } else {
            setClickState(false)
        }
    }


    return (
        <>
            {showScroll === true ?
                <Popover className="fixed left-8 lg:left-28 bottom-40 z-30">
                    {({open}) => (
                        <>
                            <span className={`animate-ping absolute flex item-center justify-center rounded-lg h-12 w-12 shadow-lg opacity-75 ${open ? 'bg-red-600' : 'bg-green-600'}`}/>
                            <Popover.Button
                                className={`flex absolute h-12 w-12 item-center justify-center p-2 rounded-lg shadow-lg ${open ? 'bg-red-600' : 'bg-green-600'}`}>
                                {open ? <FaTimes className="text-white text-3xl"/> :
                                    <FaWhatsapp className="text-white text-3xl"/>}
                            </Popover.Button>
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel
                                    ref={setPopperElement}
                                    style={styles.popper}
                                    {...attributes.popper}
                                    className="absolute bg-white shadow-2xl rounded-lg w-80 p-6 -mt-64 ring-1 ring-black ring-opacity-5">
                                    <div className="flex flex-col justify-center item-center">
                                        <p className="font-bold mb-2">Добрый день!</p>
                                        <p>Здесь вы можете задать любые вопросы о путешесвии ⛵️ Будем рады помочь!</p>
                                        <p className="font-bold mt-2">Команда YaBooker ❤️</p>
                                        <a href="https://wa.me/+79782920516?text=Добрый день! Подскажите, пожалуйста, по туру">
                                            <button className="h-8 w-full bg-green-600 rounded-lg mt-4">
                                                <div
                                                    className="flex flex-wrap items-center justify-center text-white text-xl">
                                                    <FaWhatsapp className="mr-2"/>
                                                    <p>Написать</p>
                                                </div>
                                            </button>
                                        </a>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover> : null}
        </>
    )
}