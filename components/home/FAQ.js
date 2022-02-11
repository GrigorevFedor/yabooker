import {useState} from "react";
import {AiOutlinePlus, AiOutlineClose} from "react-icons/ai";
import {faq} from "../../data/faq";


const Item = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button type="button" aria-label="Open item" title="Open item"
                    className="flex flex-wrap justify-between w-full p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
                <p className="text-lg font-medium text-left w-11/12">{title}</p>
                {isOpen ? <AiOutlineClose className="w-1/12"/> : <AiOutlinePlus className="w-1/12"/>}
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-600">{children}</p>
                </div>
            )}
        </div>
    );
};

export default function FAQ() {
    return (
        <div className="px-4 mx-auto mt-16">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="space-y-4">
                    {faq.map(faqList => (
                        <Item key={faqList.id} title={faqList.title}>
                            {faqList.description}
                        </Item>))}
                </div>
            </div>
        </div>
    )
}