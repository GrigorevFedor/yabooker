import * as React from "react";
import {useMemo, useState} from 'react'
import {useRouter} from "next/router";
import Slider from '@mui/material/Slider';
import moment from "moment";
import ListCard from "./ListCard";
import {FiltersSelect} from "../core/filters/Select";
import {FiltersDataPicker} from "../core/filters/DataPicker";
import {FaSortAmountDown, FaSortAmountDownAlt, FaTimesCircle} from "react-icons/fa";
import {MobileFilters} from "./mobFilters";
import {Dialog} from "@headlessui/react";

export default function ToursFilter({tours}) {
    const router = useRouter();
    const {country, minPrice, maxPrice, startDate, endDate} = router.query

    const CheckDate = () => {
        if (!startDate) {
            return null
        }
        return startDate
    }


    const [filters, setFilters] = useState(
        {
            country: country,
            minPrice: minPrice,
            maxPrice: maxPrice,
            startDate: CheckDate(),
            endDate: endDate,
        }
    )
    const [countries, setCountries] = useState([])

    const toursFavorit = tours.filter(val => (moment(val.start_date).unix()) > filters.startDate).filter((val, index) => index < 3)

    const duplicate = (arr) => {
        let options = []
        let duplicate = false
        arr.map((item) => {
            options.map(val => {
                if (val.value === item.value) {
                    duplicate = true
                }
            })
            if (duplicate) {
                duplicate = false
            } else {
                options.push(item)
            }

        })
        return options
    }


    const filteredTours = useMemo(() => {
        let filteredDate, filteredPrice, filteredCountry
        if (!filters.startDate || !filters.endDate) {
            filteredDate = tours
        } else {
            filteredDate = tours.filter(val => (moment(val.start_date).unix() >= filters.startDate && moment(val.start_date).unix() <= filters.endDate))
        }

        if (!filters.minPrice || !filters.maxPrice) {
            filteredPrice = filteredDate
        } else {
            filteredPrice = filteredDate.filter((tour) => (
                tour.price_rub >= filters.minPrice && tour.price_rub <= filters.maxPrice
            ))
        }

        let countries = []
        filteredPrice.map(tour => countries.push(
            {value: 'all', label: 'Все страны', flag: 'https://flagcdn.com/un.svg'},
            {
                value: tour.start_country.alpha2Code,
                label: tour.start_country.native_name,
                flag: tour.start_country.flag
            }))
        countries = duplicate(countries)
        setCountries(countries)

        if (!filters.country || filters.country === 'all') {
            filteredCountry = filteredPrice
        } else {
            filteredCountry = []
            filteredCountry.push(...filteredPrice.filter(val => val.start_country.alpha2Code === filters.country))
        }
        return filteredCountry
    }, [filters])

    const updateDate = ({startDate, endDate}) => {
        setFilters({
            ...filters,
            startDate: startDate,
            // endDate: endDate
        })
        router.replace({
            pathname: router.pathname,
            query: {
                ...router.query,
                startDate: encodeURI(startDate),
                // endDate: encodeURI(endDate)
            },
        }, undefined, {shallow: true})
    };

    const getMinMaxPrice = () => {
        let price = tours.map((tour) => (tour.price_rub))
        return [Math.min.apply(null, price), Math.max.apply(null, price)]
    }

    const getPrice = () => {
        if (!filters.minPrice || !filters.maxPrice) {
            return getMinMaxPrice()
        }
        return [parseInt(filters.minPrice), parseInt(filters.maxPrice)]
    }

    const updatePrice = (e, newValue) => {
        setFilters({
            ...filters,
            minPrice: newValue[0],
            maxPrice: newValue[1]
        })
        router.replace({
            pathname: router.pathname,
            query: {
                ...router.query,
                minPrice: newValue[0],
                maxPrice: newValue[1]
            },
        }, undefined, {shallow: true});
    }

    const updateCountry = (value) => {
        setFilters({
            ...filters,
            country: value,
        })
        router.replace({
            pathname: router.pathname,
            query: {
                ...router.query,
                country: value,
            }
        }, undefined, {shallow: true});
    }

    const selectedSelect = () => {
        if (!filters.country) {
            return countries.filter(val => val.value === 'all')[0]
        }
        return countries.filter(val => val.value === filters.country)[0]
    }

    const [sortStatus, setSortStatus] = useState(null);

    const handleSort = () => {
        if (sortStatus) {
            filteredTours.sort((a, b) => a.price_rub - b.price_rub)
            setSortStatus(!sortStatus);
        } else {
            filteredTours.sort((a, b) => b.price_rub - a.price_rub)
            setSortStatus(!sortStatus);
        }
    }

    const [isOpen, setIsOpen] = useState(false)

    const isOpenMobailFilter = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const onClickCountryCancel = () => {
        setFilters({
            ...filters,
            country: undefined,
        })
        router.replace({
            pathname: router.pathname,
            query: {
                ...router.query,
                country: 'all',
            }
        }, undefined, {shallow: true});
    }

    const onClickStartDateCancel = () => {
        setFilters({
            ...filters,
            startDate: null,
        })
        router.replace({
            pathname: router.pathname,
            query: {
                ...router.query,
                startDate: null,
            }
        }, undefined, {shallow: true});
    }

    return (
        <div className="flex flex-col xl:flex-row justify-between mt-24">
            <div className="mb-5 lg:w-1/5 lg:mx-0 lg:mb-0 px-4 hidden lg:block">
                <h3 className="text-2xl font-bold">Найти</h3>
                <span
                    className="mt-2 mb-6 block w-1/3 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900"/>
                <div className="font-bold mb-4">Выберите дату старта</div>
                <div className="relative w-full h-50 border border-gray-200 rounded-lg mb-4">
                    <FiltersDataPicker
                        startDate={moment.unix(filters.startDate).toDate()}
                        minDate={new Date()}
                        dateFormat={"dd.MM.yyyy"}
                        updateDate={updateDate}
                    />
                </div>
                <div className="w-full mb-8">
                    <div className="font-bold mb-4">Выберите цену</div>
                    <div className="mx-2">
                        <Slider
                            value={getPrice()}
                            min={getMinMaxPrice()[0] - 10_000}
                            max={getMinMaxPrice()[1] + 10_000}
                            step={1000}
                            onChange={updatePrice}
                            valueLabelDisplay="auto"
                        />
                    </div>
                </div>
                <div className="font-bold mb-4">Выберите страну старта</div>
                <div className="w-full h-50 border border-gray-200 rounded-lg">
                    <FiltersSelect
                        selected={selectedSelect()}
                        updateCountry={updateCountry}
                        countriesState={countries}
                    />
                </div>
                {/*<div className="flex items-center justify-center mt-8 mb-12">*/}
                {/*    <button*/}
                {/*        className="rounded-lg p-2 hover:bg-primary-100 text-white h-10 font-bold text-black bg-primary-900 hover:bg-yellow-100*/}
                {/*    md:px-8 px-24 mt-12 md:mt-0 ring-4 ring-yellow-200 ring-opacity-50"*/}
                {/*        onClick={handleDeleteClick}>Очистить фильтры*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

            {filteredTours.length !== 0
                ?
                <div className="xl:w-4/5">
                    <div className="flex flex-wrap px-4 mb-1">
                        {country === 'all' || filters.country === undefined || selectedSelect() === undefined ? null
                            : <p className="flex items-center py-2 px-4 border border-gray-200 rounded-lg mr-2 mb-2">
                                <img className="mr-2" src={selectedSelect().flag} alt="" width="25"/>
                                {selectedSelect().label}
                                <button className="ml-4" onClick={onClickCountryCancel}><FaTimesCircle /></button>
                            </p>}
                        {startDate === undefined || filters.startDate === null ? null
                            : <p className="flex items-center py-2 px-4 border border-gray-200 rounded-lg mb-2">
                                c {moment.unix(filters.startDate).format("DD.MM.YYYY")}
                                <button className="ml-4" onClick={onClickStartDateCancel}>
                                    <FaTimesCircle />
                                </button>
                            </p>}
                    </div>
                    <div className="flex flex-wrap items-center p-4 text-primary-300">
                        <button className="flex flex-wrap items-center justify-between h-10 p-2 rounded-lg"
                                onClick={handleSort}>по цене
                            {sortStatus ? <FaSortAmountDown className="ml-1"/> :
                                <FaSortAmountDownAlt className="ml-1"/>}
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-full lg:hidden ">
                        <button
                            className="z-30 fixed bottom-8 flex-wrap items-center justify-center w-64 h-10 rounded-lg bg-primary-900 font-bold shadow-lg ring ring-primary-900 ring-opacity-50"
                            onClick={isOpenMobailFilter}>Фильтры
                        </button>
                    </div>
                    <Dialog open={isOpen} onClose={() => isOpenMobailFilter()}
                            className="fixed z-40 inset-0 overflow-y-auto w-full bg-white p-8 lg:hidden">
                        <Dialog.Title className="text-2xl font-bold">Найти</Dialog.Title>
                        <span
                            className="mt-2 mb-6 block w-1/3 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900"/>
                        <div className="font-bold mb-4">Выберите дату старта</div>
                        <div className="relative w-full h-50 border border-gray-200 rounded-lg mb-4">
                            <FiltersDataPicker
                                startDate={moment.unix(filters.startDate).toDate()}
                                minDate={new Date()}
                                dateFormat={"dd.MM.yyyy"}
                                updateDate={updateDate}
                            />
                        </div>
                        <div className="w-full mb-8">
                            <div className="font-bold mb-4">Выберите цену</div>
                            <div className="mx-2">
                                <Slider
                                    value={getPrice()}
                                    min={getMinMaxPrice()[0] - 10_000}
                                    max={getMinMaxPrice()[1] + 10_000}
                                    step={1000}
                                    onChange={updatePrice}
                                    valueLabelDisplay="auto"
                                />
                            </div>
                        </div>
                        <div className="font-bold mb-4">Выберите страну старта</div>
                        <div className="w-full h-50 border border-gray-200 rounded-lg">
                            <FiltersSelect
                                selected={selectedSelect()}
                                updateCountry={updateCountry}
                                countriesState={countries}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="fixed bottom-8 w-64 h-10 rounded-lg bg-primary-900 font-bold"
                                    onClick={() => isOpenMobailFilter()}>Готово
                            </button>
                        </div>
                        {/*<button onClick={() => isOpenMobailFilter()}>Cancel</button>*/}
                    </Dialog>
                    <ListCard tours={filteredTours}/>
                </div>
                :
                <div className="flex flex-col xl:w-4/5">
                    <div className="h-56 flex flex-col items-center justify-center text-center px-4">
                        <p className="text-xl font-bold">К сожалению по данному запросу ничего не было найдено </p>
                        <span
                            className="mt-2 mb-6 block w-1/3 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900"/>
                        <p className="text-xl font-bold">Мы подобрали для вас несколько вариантов</p>
                    </div>
                    <ListCard tours={toursFavorit}/>
                </div>
            }
        </div>
    )
}