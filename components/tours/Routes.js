import {useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const AccordionItem = ({data, active, onToggle}) => {
    const {title, description} = data

    return (
        <div className="w-full">
            <button type="button" aria-label="Open item" title="Open item"
                    className="flex flex-wrap justify-between w-full p-4 focus:outline-none rounded-lg bg-gray-50 mt-2 mb-2"
                    onClick={onToggle}>
                <p className="text-xl font-bold text-left w-11/12">{title}</p>
                {active ? <AiOutlineClose className="w-1/12 mt-2"/> : <BsChevronDown className="w-1/12 mt-2"/>}
            </button>
            {active && (
                <div className="p-4 pt-0">
                    <p className="break-words text-gray-600">{description}</p>
                </div>
            )}
        </div>
    )
}



export default function TourRoutes({ tours_route }) {
    const [isOpen, setIsOpen] = useState(0);

    const handleToggle = (index) => {
        if (isOpen === index) {
            return setIsOpen(0)
        }
        setIsOpen(index)
    };

    return (
        <div className="w-full mx-auto">
            {tours_route.map((i, index) => (
                <AccordionItem
                    key={index}
                    data={i}
                    onToggle={() => handleToggle(index)}
                    active={isOpen === index}/>
            ))}
        </div>
    )
}