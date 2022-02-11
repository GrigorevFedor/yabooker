import {useState} from "react";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Item = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button type="button" aria-label="Open item" title="Open item"
                    className="flex items-center justify-between w-full p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
                <p className="text-lg font-medium">{title}</p>
                { isOpen ?  <AiOutlineClose />: <AiOutlinePlus />}
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export default function TourDay() {
    return (
        <div className="w-full">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="space-y-4">
                    <Item title="День 1">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="День 1">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="День 3">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="How much money you got on you?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                </div>
            </div>
        </div>
    )
}