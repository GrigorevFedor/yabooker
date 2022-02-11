import moment from "moment";
import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function StickyBar({id, url, title, start_date, finish_date, price, qty}) {
    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault();
        await router.push({
            pathname: '/checkout',
            query: {
                id: id,
                url: url,
                qty: 1,
            }
        })
    };

    return (
        <>
            <div className='bg-gray-50 rounded-t-lg fixed inset-x-0 bottom-0 z-10'>
                <div className="box-content-2">
                    <div className='flex flex-wrap justify-between'>
                        <div className='flex flex-col hidden lg:block'>
                            <p className='text-xl font-bold'>{title}</p>
                            <p className=''>{`${moment(start_date).format('DD.MM.YYYY')} - ${moment(finish_date).format('DD.MM.YYYY')}`}</p>
                        </div>
                        <div className='flex flex-wrap w-full lg:w-1/2 justify-end items-center content-center'>
                            <div className='w-1/2 lg:w-1/4 flex flex-col'>
                                <p className='text-xl font-bold'>~ {new Intl.NumberFormat('ru-RU',).format(price)} ₽</p>
                                <p>за человека</p>
                            </div>
                            {qty === 0 || qty === null || qty === undefined ?
                                <Link href='/#contact'>
                                    <button className="w-1/2 btn-primary-1 cursor-pointer" type="submit">
                                        Подобрать тур
                                    </button>
                                </Link> :
                                <button onClick={handleSubmit} className="w-1/2 btn-primary-1 cursor-pointer">
                                    Оставить заявку
                                </button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}