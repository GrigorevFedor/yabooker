import {useRouter} from 'next/router'
import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";

import {add_qty, sub_qty} from "../../store/basketSlice";
import moment from "moment";
import ReactCountryFlag from "react-country-flag";
import {styled} from '@mui/material/styles';
import {Rating} from "@material-ui/lab";
import Captain from "./Captain";
import {Popover} from "@headlessui/react";
import Image from "next/image";
import {FaAnchor, FaDotCircle, FaInfoCircle, FaMinus, FaPlus, FaPlusSquare} from "react-icons/fa";
import TourLevel from "./Level";

export default function TourHero({
                                     id,
                                     url,
                                     title,
                                     price,
                                     start_country,
                                     start_point,
                                     marina,
                                     airport,
                                     start_date,
                                     finish_date,
                                     organizer,
                                     qty,
                                     quantity,
                                     type,
                                     years,
                                     yachtType,
                                     level
                                 }) {
    const router = useRouter()
    const dispatch = useDispatch()

    const countState = useSelector((state) => state.basket.qty)

    const handleIncrement = () => {
        if (countState <= (qty - 1)) {
            dispatch(add_qty())
        }
    }

    const handleDecrement = () => {
        if (countState >= 2) {
            dispatch(sub_qty())
        }
    }

    const inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await router.push({
            pathname: '/checkout',
            query: {
                id: id,
                url: url,
                qty: countState,
            }
        })
    };

    function getName(qty) {
        if (qty === 1 || qty === null || qty === undefined) {
            return "место"
        }
        if (qty >= 2 && qty <= 4) {
            return "места"
        }
        if (qty >= 5 && qty <= 20) {
            return "мест"
        }
    }

    function getColor(qty) {
        if (qty >= 1 && qty <= 2) {
            return <p className={`text-red-600 font-bold`}>{qty} {getName(qty)}</p>
        }
        if (qty >= 3 && qty <= 5) {
            return <p className={`text-yellow-600 font-bold`}>{qty} {getName(qty)}</p>
        }
        if (qty >= 6) {
            return <p className={`text-green-600 font-bold`}>{qty} {getName(qty)}</p>
        }
    }

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#16a34a',
        },
    });

    return (

        <div className="w-full">
            {/*<div className="w-full bg-black bg-opacity-50">*/}
            <div className="bg-tour-background_i lg:bg-center bg-top bg-cover bg-no-repeat h-1/3 py-24">
                <div
                    className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-24">
                    <div className="flex flex-col justify-between mb-12">
                        <div className="w-full flex flex-wrap items-center mb-8">
                            <ReactCountryFlag
                                countryCode={start_country.alpha2Code}
                                svg
                                style={{
                                    fontSize: '1.5em',
                                    lineHeight: '1.5em',
                                }}
                                aria-label={start_country.name}
                            />
                            <p className="ml-2 text-xl font-bold text-white">
                                {start_country.native_name}, {start_point}
                            </p>
                        </div>
                        <div className="w-full">
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-40 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12">
                <div className="lg:flex lg:flex-wrap items-center justify-center box-card-info p-8">
                    <div className="flex flex-wrap lg:justify-between w-full">
                        <div className="flex justify-center lg:w-1/6 mb-8 lg:mb-0 w-full">
                            <Captain
                                avatar={organizer.user.avatar}
                                last_name={organizer.user.last_name}
                                first_name={organizer.user.first_name}
                            />
                        </div>
                        <div className="lg:w-1/3 mb-2 lg:mb-0">
                            <div className='w-full flex flex-wrap justify-start'>
                                <p className="w-36 font-bold">Формат</p>
                                <p>{type}</p>
                            </div>
                            <div className='w-full flex flex-wrap justify-start mt-2'>
                                <p className="w-36 font-bold">Возраст</p>
                                <p>{years}</p>
                            </div>
                            <div className='w-full flex flex-wrap justify-start mt-2'>
                                <p className="w-36 font-bold">Тип судна</p>
                                <p>{yachtType}</p>
                            </div>
                            <div className='w-full flex flex-wrap justify-start mt-2'>
                                <p className="w-36 font-bold">Аэропорт</p>
                                <p>{airport}</p>
                            </div>
                            <div className='w-full flex flex-wrap justify-start mt-2'>
                                <p className="w-36 font-bold">Группа</p>
                                <p>{quantity} человек</p>
                            </div>
                            <div className='w-full flex flex-wrap items-center justify-start mt-2'>
                                <Popover className="relative w-36">
                                    <Popover.Button>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-bold mr-2">Сложность</p>
                                            <FaInfoCircle/>
                                        </div>
                                    </Popover.Button>
                                    <Popover.Panel
                                        className="absolute z-10 bg-white text-sm shadow-lg rounded-lg p-6 lg:p-8 w-80 lg:w-96 mt-4 lg:-ml-16 -ml-4 ring-1 ring-black ring-opacity-5">
                                        <div className="flex">
                                            <TourLevel level={4}/>
                                            <p className="ml-4 w-60">
                                                Яхтинг как спорт, только подготовленные яхтсмены с корочкой competent crew
                                            </p>
                                        </div>
                                        <div className="flex mt-4">
                                            <TourLevel level={3}/>
                                            <p className="ml-4 w-60">
                                                Яхтинг как спорт, опытный яхтсмен, но можно без корочки competent crew
                                            </p>
                                        </div>
                                        <div className="flex mt-4">
                                            <TourLevel level={2}/>
                                            <p className="ml-4 w-60">
                                                Есть хорошая теоретическая база, понимание основ яхтинга
                                            </p>
                                        </div>
                                        <div className="flex mt-4">
                                            <TourLevel level={1}/>
                                            <p className="ml-4 w-60">
                                                Подготовка не требуется
                                            </p>
                                        </div>
                                    </Popover.Panel>
                                </Popover>
                                <TourLevel level={level.level}/>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className='w-full flex flex-wrap justify-start'>
                                <p className="w-36 lg:w-40 font-bold">Дата: </p>
                                <p>{moment(start_date).format('DD.MM.YY')} - {moment(finish_date).format('DD.MM.YY')}</p>
                            </div>
                            <div className='w-full flex flex-wrap justify-start mt-2'>
                                <p className="w-36 lg:w-40 font-bold">Марина старта: </p>
                                <p>{marina}</p>
                            </div>
                            {qty === 0 || qty === null || qty === undefined ? '' :
                                <div className="w-full flex flex-wrap justify-start mt-2">
                                    <p className="w-36 lg:w-40 font-bold">Осталось мест: </p>
                                    {getColor(qty)}
                                </div>
                            }
                            <div className="w-full flex flex-wrap items-center mt-4">
                                <p className="w-36 lg:w-40 font-bold">Цена: </p>
                                <div className="text-2xl lg:text-4xl font-extrabold">
                                    ~ {new Intl.NumberFormat('ru-RU',).format(price * countState)} ₽
                                </div>
                            </div>
                            {/*<div className="flex justify-center text-center text-sm text-gray-500 mb-2">*/}
                            {/*    <p className="w-10/12">*/}
                            {/*        Стоимость места при размещении в двухместной каюте*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            <div className="w-full flex flex-wrap items-center justify-between text-center">
                                {qty === 0 || qty === null || qty === undefined ?
                                    <div
                                        className="flex items-center justify-center h-10 rounded-lg relative border-2 border-gray-200 mt-4 p-4 w-full lg:w-28">
                                        <p className="font-bold text-red-500">Нет мест</p>
                                    </div>
                                    :
                                    <div
                                        className="flex flex-row items-center justify-center h-10 w-full lg:w-28 rounded-lg relative border border-gray-200 mt-4">
                                        <button data-action="decrement" onClick={handleDecrement}
                                                className="hover:bg-primary-900 h-full w-20 rounded-l cursor-pointer hover:rounded-r">
                                            <FaMinus className="m-auto"/>
                                        </button>
                                        <input type="number"
                                               readOnly={true}
                                               id="count"
                                               className="outline-none focus:outline-none text-center w-full font-bold text-md hover:text-black
                                               focus:text-black flex items-center text-gray-700 outline-none"
                                               name="custom-input-number" value={`${countState}`}
                                               onChange={(event) => inputChangedHandler(event)}/>
                                        <button data-action="increment" onClick={handleIncrement}
                                                className="hover:bg-primary-900 h-full w-20 rounded-r cursor-pointer hover:rounded-l">
                                            <FaPlus className="m-auto"/>
                                        </button>
                                    </div>}
                                {qty === 0 || qty === null || qty === undefined ?
                                    <Link href='/#contact'>
                                        <button className="btn-primary-1 cursor-pointer" type="submit">
                                            Подобрать тур
                                        </button>
                                    </Link> :
                                    <button type="submit" onClick={handleSubmit} className="btn-primary-1">
                                        Оставить заявку
                                    </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};