import ReactDatePicker, {registerLocale} from "react-datepicker";
import moment from "moment";
import {FaArrowLeft, FaArrowRight, FaCalendarAlt} from "react-icons/fa";
import React, {forwardRef, useState} from "react";
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru)

export const FiltersDataPicker = ({ startDate, minDate, dateFormat, updateDate }) => {
    return (
        <>
            <ReactDatePicker
                locale='ru'
                selected={startDate}
                minDate={minDate}
                dateFormat={dateFormat}
                openToDate={minDate}
                nextMonthButtonLabel=">"
                previousMonthButtonLabel="<"
                customInput={<ButtonInput />}
                placeholderText="Выберите день"
                todayButton="Сегодня"
                onChange={(date) => {
                    updateDate({startDate: moment(date).unix()});
                }}
                renderCustomHeader={({
                                         date,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled
                                     }) => (
                    <div className="flex items-center justify-between px-2 py-2">
                        <span className="text-lg text-gray-700">
                            {moment(date).format('MMMM yy')}
                        </span>
                        <div className="space-x-2">
                            <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                type="button"
                                className={`
                                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-gray-700 bg-white border border-gray-300 
                                            rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500`}
                            >
                                <FaArrowLeft className="w-5 h-5 text-gray-600"/>
                            </button>
                            <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                type="button"
                                className={`
                                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                            inline-flex p-1 text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                            >
                                <FaArrowRight className="w-5 h-5 text-gray-600"/>
                            </button>
                        </div>
                    </div>
                )}
            />
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2">
                <FaCalendarAlt className="h-5 w-5 text-gray-400" aria-hidden="true"/>
            </span>
        </>
    )
}

const nowDate = moment()

const ButtonInput = forwardRef(({ value, onClick , minDate}, ref) => (
    <button onClick={onClick} ref={ref} type="button" className='relative w-full bg-white rounded-lg pl-3 py-4 text-left cursor-default
                            focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 font-bold'>
        {value !== '01.01.1970' ? value : <p className="text-gray-400">{nowDate.format('DD.MM.YYYY')}</p>}
    </button>
))