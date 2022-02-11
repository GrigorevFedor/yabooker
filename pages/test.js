import {useRouter} from 'next/router'
import * as React from 'react'
import {useEffect, useState} from 'react'
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ru from "date-fns/locale/ru";
import DateRangePicker from "@mui/lab/DateRangePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import moment from "moment";
import {Listbox} from '@headlessui/react'

export default function test() {

    const router = useRouter();

    const updateQuery = (newQuery) => {
        router.push({
            pathname: router.pathname,
            query: {...router.query, search: encodeURI(newQuery)},
        });
    };

    const updateDate = ({startDate, endDate}) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                start: encodeURI(startDate),
                end: encodeURI(endDate)
            },
        });
    };


    const getDate = () => {
        if (!router.query.start) {
            return [new Date(), new Date()]
        }
        return [moment.unix(router.query.start), moment.unix(router.query.end)]
    }

    const countries = [
        {id: 1, name: 'RU', unavailable: false},
        {id: 2, name: 'RU', unavailable: false},
        {id: 3, name: 'EN', unavailable: false},
    ]
    const [selectedPerson, setSelectedPerson] = useState([])

    const updatePerson = (value) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                country: value,
            },
        });
    };


    const selected = () => {
        const countryQuery = router.query.country
        return countries.filter((country) => (country.name === countryQuery))[0]
    }

    const [options, setOptions] = useState([])

    useEffect(() => {
        const countryQuery = router.query.country
        let country = countries.filter((country) => (country.name === countryQuery))
        setOptions(country)
    },);

    console.log(options)

    return (
        <>
            <div>
                <h2>Current query is {router.query.start}</h2>
                <button onClick={() => {
                    updateQuery('1, sdkfjksdjf, ksdjfkjskdf')
                }}>Update query
                </button>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                    <DateRangePicker
                        label={"Выберите дату"}
                        toolbarTitle={"Выберите даты"}
                        mask="__.__.____"
                        okText={'Готово'}
                        cancelText={'Отмена'}
                        startText="Начало"
                        endText="Конец"
                        value={getDate()}
                        // showToolbar={true}
                        showTodayButton={true}
                        minDate={new Date()}
                        // maxDate={getStartEndDate()[1]}
                        onChange={(data) => {
                            updateDate({
                                startDate: moment(data[0], 'YYYY.MM.DD').unix(),
                                endDate: moment(data[1], 'YYYY.MM.DD').unix()
                            })
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField
                                    size="small"
                                    {...startProps} />
                                <Box sx={{mx: 1}}> <ArrowForwardRoundedIcon/> </Box>
                                <TextField
                                    size="small"
                                    {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                <Listbox value={selectedPerson} onChange={(value) => updatePerson(value.name)}>
                    <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                    <Listbox.Options>
                        {countries.map((person) => (
                            <Listbox.Option
                                key={person.id}
                                value={person}
                                disabled={person.unavailable}
                            >
                                {person.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        </>
    )
}