import {Listbox} from '@headlessui/react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {add_filter_tours} from "../../store/filterToursSlice";
import {useRouter} from "next/router";


export const SelectFilter = ({countries, selected}) => {
    const dispatch = useDispatch()
    const router = useRouter();

    function add_filter({value}) {
        console.log(value)
        dispatch(add_filter_tours({countries: value}))
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                country: encodeURI(value),
            },
        });
    }

    return (
        <Listbox value={selected} onChange={(value) => add_filter({value})}>
            <Listbox.Button>
                <div className="flex flex-wrap">
                    {/*<img src={selected.image} alt={selected.label} width="30"/>*/}
                    <span className="ml-2">{selected.label}</span>
                </div>
            </Listbox.Button>
            <Listbox.Options>
                {countries.map((country, index) => (
                    <Listbox.Option
                        key={index}
                        value={country}
                        // disabled={person.unavailable}
                    >
                        {country.label}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}