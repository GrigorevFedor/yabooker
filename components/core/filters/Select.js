import {Listbox, Transition} from "@headlessui/react";
import {FaCheck, FaChevronDown} from "react-icons/fa";
import React, {Fragment} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const FiltersSelect = ({selected, updateCountry, countriesState}) => {
    if (!selected) {
        selected = {value: 'all', label: 'Все страны', flag: 'https://flagcdn.com/un.svg'}
    }
    return (
        <>
            <Listbox value={selected} onChange={(value) => updateCountry(value)}>
                {({open}) => (
                    <>
                        <div className="relative">
                            <Listbox.Button className="relative w-full bg-white rounded-lg pl-3 pr-10 py-4 text-left cursor-default
                            focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900">
                                <span className="flex items-center">
                                    <img src={selected.flag} alt="" width="25"/>
                                    <span className="ml-3 font-bold block truncate">{selected.label}</span>
                                </span>
                                <span
                                    className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <FaChevronDown className="h-5 w-5 text-gray-400"/>
                                </span>
                            </Listbox.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1
                                                            ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                                    {countriesState.length === 0 ?
                                        <div className="flex items-center justify-center p-2">
                                            <span className='text-gray-400'>
                                                Нет стран
                                            </span>
                                        </div>
                                        : null}
                                    {countriesState.map((person) => (
                                        <Listbox.Option
                                            key={person.value}
                                            className={({active}) => classNames(active ? 'text-white bg-primary-300' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                                            value={person.value}>
                                            {({selected, active}) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <img src={person.flag} alt=""
                                                             width="25"/>
                                                        <span className='ml-3 block truncate'>
                                                            {person.label}
                                                        </span>
                                                    </div>
                                                    {selected ? (
                                                        <span
                                                            className={active ? 'text-white' : 'text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4'}>
                                                            <FaCheck className="h-5 w-5" aria-hidden="true"/>
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>
    )
}
