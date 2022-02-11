import {FaCheckCircle, FaDiaspora, FaTimesCircle} from "react-icons/fa";
import {yachtDetails} from "../../data/yachtDetails";
import {BsCheck, BsX} from "react-icons/bs";
import TourImg from "./Img";

const ItemInfo = ({ title, data }) => {
    return (
        <div className="w-full mt-2 mb-2">
            <p className="text-xl font-bold">
                {title}
            </p>
            <p className="text-gray-600">
                {data}
            </p>
        </div>
    )
}

const Item = ({ title, data, icon_name }) => {
    let item;
    if (data === true) {
        item = <FaCheckCircle className="text-green-600"/>;
    } else {
        item = data;
    }
    return (
        <div className="flex flex-wrap justify-start items-center w-full">
            <div className="bg-gray-100 p-2 rounded-lg ring ring-gray-300 ring-opacity-50">
                {icon_name}
            </div>
            <div className="ml-2 lg:w-2/3 w-9/12">
                <p className="px-2 font-bold leading-4">
                    {title}
                </p>
            </div>
            <p className="my-4 text-xl font-bold">
                {item === false ? <FaTimesCircle className="text-red-600"/> : item}
            </p>
        </div>
    )
}

export default function TourYachtDetail({name, description, year, type, size, yacht_more, yacht_img}) {
    return (
        <>
            <div id="yacht-detail" className="flex flex-wrap justify-center items-center w-full mb-12 mt-8">
                <div className="w-full flex flex-wrap justify-between">
                    <div className="lg:w-1/3">
                        <p className="text-xl font-bold text-start">
                            {name}
                        </p>
                        <p className="text-gray-600 mt-2 mb-10">
                            {description}
                        </p>
                        {year === 0 ? null : <ItemInfo id={year} title="Год выпуска" data={year}/>}
                        <ItemInfo id={type} title="Тип судна" data={type}/>
                        {size === 0 ? null: <ItemInfo id={size} title="Размер" data={size + ' м'}/> }
                    </div>
                    <div className="lg:w-1/2 w-full mt-8 mb-8 lg:mt-0 lg:mb-0">
                        <TourImg photos={yacht_img}/>
                    </div>
                </div>
                <div className="w-full mt-8">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-1">
                        {Object.keys(yacht_more).map((key, index) => (
                            yachtDetails[key] &&
                            <Item
                                id={yachtDetails[key].title}
                                title={yachtDetails[key].title}
                                key={index}
                                icon_name={yachtDetails[key].icon_name}
                                data={yacht_more[key]}
                            />
                        ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}