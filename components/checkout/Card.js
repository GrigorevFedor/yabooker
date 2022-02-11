import moment from "moment";
import {FaUserAlt} from "react-icons/fa";
import Count from "../tours/Count";


moment.locale('ru')

export default function CheckoutCart({title, start_point, start_date, finish_date, price, quantity}) {
    return (
        <>
            <div className="w-full">
                <div className="flex flex-wrap items-center justify-center">
                    <div
                        className="w-full mb-4 text-3xl font-bold tracking-tight sm:text-2xl sm:leading-none text-center">
                        {title}, {start_point}
                    </div>
                    <div className="w-full mt-4">
                        <div
                            className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6'>
                            <div
                                className="flex flex-col text-center leading-none rounded-lg border-2 border-gray-200 p-4">
                            <span
                                className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{moment(start_date).format('MMMM')}</span>
                                <span
                                    className="font-medium text-lg text-gray-800 title-font leading-none">{moment(start_date).format('DD')}</span>
                            </div>
                            <div
                                className="w-full flex flex-col text-center leading-none rounded-lg border-2 border-gray-200 p-4">
                            <span
                                className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{moment(finish_date).format('MMMM')}</span>
                                <span
                                    className="font-medium text-lg text-gray-800 title-font leading-none">{moment(finish_date).format('DD')}</span>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="mt-2 flex flex-wrap text-center items-center justify-center">
                                {[...Array(quantity)].map((n, i) => <FaUserAlt key={i}
                                                                               className="text-primary-300 text-xl mr-2"/>)}
                            </div>
                        </div>
                        <div className="w-full mt-4 border-t border-primary-900">
                            <div
                                className="text-center text-4xl font-extrabold mt-4">{new Intl.NumberFormat('ru-RU',).format(price * quantity)} ₽
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-2">За одного человека {new Intl.NumberFormat('ru-RU',).format(price)} ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}