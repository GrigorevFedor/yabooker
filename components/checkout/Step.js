import {AiOutlineTeam, AiOutlineCheck, AiOutlineShopping} from "react-icons/ai";

const Item = ({icon, end, color, shortTitle}) => {
    return (
        <>
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${color}`}/>
            <div className="relative w-12 h-12 flex flex-col justify-center">
                <div
                    className={`absolute -top-9 -right-20 w-52 ${icon ? 'text-black font-bold' : 'text-gray-400'}`}>{shortTitle}</div>
                {icon ?
                    <div
                        className={`flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${color} text-2xl`}>
                        <AiOutlineCheck className='text-primary-800'/>
                    </div>
                    :
                    <div className={`border-t-2 transition duration-500 ease-in-out ${color} w-12`}/>
                }
            </div>
            {end &&
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${color} border-pr`}/>
            }
        </>
    )
}

export default function CheckoutStep({title, numberStep}) {
    return (
        <div className="mt-16 text-center w-full">
            <div className="flex items-center mt-8">
                <Item color="border-primary-800 shadow" icon={true} shortTitle="ВАУЧЕР"/>
                <Item color={numberStep >= 2 && 'border-primary-800 shadow'}
                      icon={numberStep >= 2}
                      shortTitle="ПОДТВЕРЖДЕНИЕ"/>
                <Item color={numberStep === 3 && 'border-primary-800 shadow'}
                      end={true}
                      icon={numberStep === 3}
                      shortTitle="УСПЕХ"/>
            </div>
            <h1 className="mb-10 w-full mt-8 font-bold leading-none tracking-tight text-gray-900 sm:text-3xl text-center ">
                {title}
            </h1>
            {/*<p className="pt-10 text-center text-gray-400">Шаг {numberStep} из 3</p>*/}
        </div>
    );
};