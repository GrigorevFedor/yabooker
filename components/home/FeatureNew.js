import Image from "next/image";
import {useState} from "react";
import {feature} from "../../data/feature";
import {AiFillFire, AiOutlineClose, AiOutlineFire} from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs";
import {yachtDetails} from "../../data/yachtDetails";

export const FeatureItem = ({img, title, description}) => {
    return (
        // <div className="flex flex-col items-center justify-center sm:text-center py-2 px-2">
        //     <div className="flex items-center justify-center w-32 h-32 mb-4 sm:mx-auto text-5xl text-white">
        //             <Image src={`/home/${img}.png`}
        //                  width={130}
        //                  height={130}
        //                  alt={`${title}`}
        //             />
        //         {/*<img src={`/home/${img}.png`} alt='image'/>*/}
        //     </div>
        //     <p className="mb-2 text-2xl font-bold">{title}</p>
        //     <p className="w-11/12 text-2sm text-gray-500 sm:mx-auto">
        //         {description}
        //     </p>
        // </div>

        <div className="flex flex-col justify-start p-8 box-card-info text-left">
            <div className="w-24 h-24 mb-4">
                <Image src={`/home/${img}.png`}
                       width={130}
                       height={130}
                       alt={`${title}`}
                />
                {/*<img src={`/home/${img}.png`} alt='image'/>*/}
            </div>
            <p className="mb-2 text-2xl font-bold">{title}</p>
            <p className="text-2sm text-gray-500 sm:mx-auto">
                {description}
            </p>
        </div>

    )
}

const Item = ({title, description}) => {
    return (
        <>
            <div className="p-4 pt-0">
                <p className="mb-2 text-2xl font-bold">{title}</p>
                <p className="break-words text-gray-600">{description}</p>
            </div>
        </>
    )
}


const AccordionItem = ({title, position, onToggle, active}) => {
    return (
        <>
            <div className={`z-10 lg:w-1/2 text-xl flex justify-${position}`}>
                <button type="button" aria-label="Open item" title="Open item"
                        className="p-4 focus:outline-none rounded-lg box-card-info mt-2 mb-2 h-16 w-56"
                        onClick={onToggle}>
                    <div className="flex flex-wrap">
                        {active ? <AiFillFire className='text-left text-2xl mr-2 font-bold text-green-500'/>: <AiOutlineFire className={`text-left text-2xl mr-2 ${active ? 'font-bold text-red-500' : 'text-gray-500'}`}/>}
                        <p className={`text-left ${active ? 'font-bold' : 'text-gray-500'}`}>{title}</p>
                    </div>
                </button>
                {/*{active ? <AiOutlineClose className="w-1/12 mt-2"/> : <BsChevronDown className="w-1/12 mt-2"/>}*/}
            </div>
        </>
    )
}


export default function FeatureNew() {
    const [isOpen, setIsOpen] = useState(0);

    const handleToggle = (index) => {
        if (isOpen === index) {
            return setIsOpen(0)
        }
        setIsOpen(index)
    };

    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="lg:w-1/2">
                    <div className="flex flex-wrap items-center justify-around content-center">
                        <AccordionItem
                            title={'Удобство'}
                            onToggle={() => handleToggle(0)}
                            position={'center'}
                            active={isOpen === 0}
                        />
                        <AccordionItem
                            title={'Надежность'}
                            onToggle={() => handleToggle(1)}
                            position={'start'}
                            active={isOpen === 1}
                        />
                        <AccordionItem
                            title={'Гарантии'}
                            onToggle={() => handleToggle(2)}
                            position={'center'}
                            active={isOpen === 2}
                        />
                        <AccordionItem
                            title={'Прозрачность'}
                            onToggle={() => handleToggle(3)}
                            position={'start'}
                            active={isOpen === 3}
                        />
                        <img src={`/shape-1.png`}
                             width={450}
                             height={450}
                             className="absolute z-0"
                             alt={'sdf'}/>
                    </div>

                </div>
                <div className="lg:w-1/2 lg:h-72 mt-8 lg:mt-0">
                    <Item
                        title={feature[isOpen].title}
                        description={feature[isOpen].description}
                    />
                </div>
            </div>
        </>
    )
}