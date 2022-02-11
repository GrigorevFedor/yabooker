import Link from 'next/link'
import moment from 'moment'

import {FaFire, FaPassport} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag"

import {covidInfo} from "../../data/covid";

export default function Card({
                                 url,
                                 img,
                                 title,
                                 price,
                                 start_point,
                                 start_date,
                                 finish_date,
                                 places_quantity_left,
                                 start_country,
                                 is_new,
                                 sale,
                                 middle_star
                             }) {

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


    function date() {
        return Math.ceil((new Date(finish_date) - new Date(start_date)) / (1000 * 60 * 60 * 24))
    }

    const visa = () => {
        if (start_country.visa !== null) {
            if (start_country.visa.tag === true) {
                return (
                    <div
                        className="flex justify-between px-2 py-1 items-center bg-white rounded-lg mr-2">
                        <FaPassport/>
                        <div className="ml-2">Виза</div>
                    </div>
                )
            }
        }
    }

    const covid = () => {
        if (start_country.covid !== null) {
            if (start_country.covid.tag === true) {
                return (
                    <div
                        className={`flex justify-between px-2 py-1 items-center text-white rounded-lg mr-2 bg-${covidInfo[start_country.covid.name_en].color}`}>
                        {covidInfo[start_country.covid.name_en].icon_name}
                        <p className="ml-1">{start_country.covid.name}</p>
                    </div>
                )
            }
        }
    }

    const rating = () => {
        if (middle_star !== null && middle_star !== undefined) {
            return (
                <div className="absolute top-80 left-0 p-4 -mt-1 flex flex-wrap justify-end w-full">
                    <div
                        className="font-bold bg-primary-900 rounded-lg px-2 py-1 ring-4 ring-primary-900 ring-opacity-50">
                        {middle_star.toFixed(1)}
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Link href="/tours/[slug]" as={`/tours/${url}`}>
                <a>
                    <div className="flex flex-col overflow-hidden box-card min-w-min">
                        <img className="object-cover relative" style={{width: '100%', height: 350}}
                             src={img}
                             alt={title}/>
                        <div className="absolute top-0 left-0 p-4 flex justify-start w-full">
                            {is_new === true || sale !== 0 ?
                                <div className="flex justify-between px-2 py-1 items-center bg-red-600 rounded-lg mr-2 text-white ring-4 ring-red-500 ring-opacity-50">
                                    <p>- {sale}</p>
                                </div>
                                : <div
                                    className="flex justify-between px-2 py-1 items-center bg-red-600 rounded-lg mr-2 text-white ring-4 ring-red-500 ring-opacity-50">
                                    <FaFire/>
                                    <p className="ml-2">New</p>
                                </div>
                            }
                            {covid()}
                            {visa()}
                        </div>
                        <div className="flex flex-wrap">
                            <div className="absolute top-80 left-0 p-4 -mt-1">
                                <div className="font-bold bg-primary-900 rounded-lg px-2 py-1 ring-4 ring-primary-900 ring-opacity-50">
                                    {places_quantity_left} {getName(places_quantity_left)}
                                </div>
                            </div>
                            {rating()}
                        </div>
                        <div className="font-bold text-2xl text-primary-400 mt-2 p-4">{title}</div>
                        <div className="flex flex-wrap justify-between p-4 text-primary-150">
                            <div className="w-full">
                                <div className="flex flex-wrap justify-start items-center mb-2">
                                    <ReactCountryFlag
                                        countryCode={start_country.alpha2Code}
                                        svg
                                        style={{
                                            fontSize: '1.5em',
                                            lineHeight: '1.5em',
                                        }}
                                        aria-label={start_country.name}
                                    />
                                    <p className="ml-2 text-lg font-bold">{start_country.native_name}, {start_point}</p>
                                </div>
                                <p className="text-lg font-bold mb-2">{moment(start_date).format('DD.MM.YY')} - {moment(finish_date).format('DD.MM.YY')}
                                    <span className="ml-2">({date() + 1} дн.)</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-gray-100 px-2 py-2 rounded-lg mx-4 mb-4">
                            <div className="flex flex-col  items-center text-primary-550 mr-0 ml-3 text-center">
                                <p className="font-bold text-xl sm:text-2xl md:text-xl 2xl:text-2xl">
                                    {new Intl.NumberFormat('ru-RU',).format(price)} ₽
                                </p>
                                <span className="font-light text-sm sm:text-base md:text-sm">
                                    (за человека)
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}