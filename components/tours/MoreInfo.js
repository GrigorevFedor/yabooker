import { BsCheck, BsX } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import {useState} from "react";
import {tourInfo} from "../../data/tourInfo";
import {FaCheckCircle, FaTimesCircle} from "react-icons/fa";

const Item = ({data, style}) => {
    return (

        <div className="flex flex-wrap justify-start w-full mt-2 mb-2">
            {style === 1 ? <FaCheckCircle className="text-green-600 text-xl font-bold mt-1"/> :
                <FaTimesCircle className="text-xl font-bold mt-1 text-red-600"/>}
            <p className="px-4 w-11/12 text-gray-600">
                {data}
            </p>
        </div>
    )
}

const AccordionItem = ({data, active, onToggle}) => {
    const {title, items} = data

    return (
        <div className="w-full mx-auto">
            <div className="w-full">
                <button type="button" aria-label="Open item" title="Open item"
                        className="flex flex-wrap justify-between w-full p-4 focus:outline-none rounded-lg bg-gray-50 mt-2 mb-2"
                        onClick={onToggle}>
                    <p className="text-xl font-bold text-left w-11/12">{title}</p>
                    {active ? <AiOutlineClose className="w-1/12 mt-2"/> : <BsChevronDown className="w-1/12 mt-2"/>}
                </button>
            </div>

            {active && (
                <div className="p-4 pt-0">
                    {items.map(items => (
                        <Item key={items.id} data={items.description} style={items.icon}/>))}
                </div>
            )}
        </div>
    )
}


export default function TourInfo({title, items}) {
    const [isOpen, setIsOpen] = useState(0);

    const handleToggle = (index) => {
        if (isOpen === index) {
            return setIsOpen(0)
        }
        setIsOpen(index)
    };

    return (
        <>
            {tourInfo.map((i, index) => (
                <AccordionItem
                    key={index}
                    data={i}
                    onToggle={() => handleToggle(index)}
                    active={isOpen === index}/>
            ))}
        </>
    )
}