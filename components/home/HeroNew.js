import {FiChevronDown} from "react-icons/fi";
import Link from 'next/link'
import React, {useState} from "react";
import {useRouter} from "next/router";
import moment from "moment";
import {Formik, Form} from 'formik'
import {FiltersSelect} from "../core/filters/Select";
import {FiltersDataPicker} from "../core/filters/DataPicker";

export default function HeroNew({countries}) {

    const [countriesState, setCountriesState] = useState(
        countries.map(country => (
            {
                value: country.start_country.alpha2Code,
                label: country.start_country.native_name,
                flag: country.start_country.flag
            }
        ))
    )

    const router = useRouter();
    const {country, startDate, endDate} = router.query

    const [filters, setFilters] = useState(
        {
            country: country,
            startDate: moment(new Date()).unix(),
            endDate: endDate,
        }
    )

    const updateCountry = (value) => {
        console.log(value)
        setFilters({
            ...filters,
            country: value,
        })
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                country: value,
            }
        }, undefined, {shallow: true});
    }

    const selectedSelect = () => {
        if (!filters.country) {
            return {value: 'all', label: 'Все страны', flag: 'https://flagcdn.com/un.svg'}
        }
        return countriesState.filter(val => val.value === filters.country)[0]
    }

    const updateDate = ({startDate, endDate}) => {
        setFilters({
            ...filters,
            startDate: startDate,
            // endDate: endDate
        })
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                startDate: encodeURI(startDate),
                // endDate: encodeURI(endDate)
            },
        }, undefined, {shallow: true})
    };

    const onSubmit = () => {
        router.push({
            pathname: '/tours',
            query: {
                ...router.query,
            },
        })
    }

    const initialValues = {
        country: '',
        startDate: '',
        endDate: '',
    }

    return (
        <>
            <div className="w-full h-3/4 flex content-center items-center justify-center">
                <div className="flex flex-col box-content text-center">
                    <div className="text-start text-white">
                        <h1 className="text-5xl text-4xl lg:text-7xl font-extrabold px-4 mt-8 lg:mt-0">
                            Выберите свое лучшее путешествие!
                        </h1>
                        <h2 className="mt-6 text-xl font-bold hidden lg:block">
                            Сервис по подбору яхтенных путешествий
                        </h2>
                    </div>
                    <div className="mt-8 lg:mt-20 flex justify-center item-center">
                        <Formik onSubmit={onSubmit} initialValues={initialValues}>
                            <Form action='' className="p-8 flex md:flex-row flex-col justify-center items-center w-full">
                                <div className="relative md:mr-2 w-full lg:w-60 z-10 rounded-lg">
                                    <FiltersSelect
                                        selected={selectedSelect()}
                                        updateCountry={updateCountry}
                                        countriesState={countriesState}
                                    />
                                </div>
                                <div className="relative mt-1 lg:mt-0 w-full lg:w-60 w-full md:mr-4">
                                    <FiltersDataPicker
                                        startDate={moment.unix(filters.startDate).toDate()}
                                        minDate={new Date()}
                                        dateFormat={"dd.MM.yyyy"}
                                        updateDate={updateDate}
                                    />
                                </div>
                                <button className="mt-8 lg:mt-0 rounded-lg py-3 hover:bg-primary-100 text-white font-bold text-black
                                bg-primary-900 hover:bg-yellow-100 w-full lg:w-60 ring-4 ring-yellow-200 ring-opacity-50" type="submit">
                                    <p>Найти</p>
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-1/4 items-center justify-center text-white -mt-8">
                <p className="text-xl">
                    Посмотреть туры
                </p>
                <Link href="#tours">
                    <a className="animate-bounce text-4xl text-center font-bold hover:text-yellow-400 mt-6">
                        <FiChevronDown/>
                    </a>
                </Link>
            </div>
        </>
    )
}
