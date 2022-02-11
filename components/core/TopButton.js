import {useEffect, useState} from "react";
import {FaArrowUp} from "react-icons/fa";

export default function Scroller() {

    function onClick(event) {
        window.scrollTo(0, 0)
    }

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <>
            {showScroll === true ?
                <button onClick={onClick} className="flex item-center justify-center fixed right-8 lg:right-28 bottom-28 z-30 bg-gray-400 opacity-80 p-2 rounded-lg h-12 w-12 shadow-lg">
                    <FaArrowUp className="text-white text-3xl"/>
                </button> : null
            }
        </>
    )
}