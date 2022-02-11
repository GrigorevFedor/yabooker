import Layout from "../../components/core/Layout";
import CheckoutStep from "../../components/checkout/Step";
import CheckoutPerson from "../../components/checkout/Person";
import CheckoutCart from "../../components/checkout/Card";
import {useRouter} from 'next/router'
import ErrorPage from "next/error";
import {useEffect, useState} from "react";
import API from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {remove_checkout} from "../../store/checkoutSlice"
import {delete_qty} from "../../store/basketSlice";

export default function CheckoutConfirmPage({tour}) {
    const router = useRouter()
    const dispatch = useDispatch()

    const checkoutState = useSelector((state) => state.checkout)
    const countState = useSelector((state) => state.basket)

    const handleSubmit = async e => {
        e.preventDefault();
        const booked = {
            first_name: checkoutState.firstName,
            last_name: checkoutState.lastName,
            email: checkoutState.email,
            tel: checkoutState.tel,
            quantity: router.query.qty,
            tours: router.query.id,
        };
        const res = await API.post('booked/', booked)
        if (res.status === 201) {
            router.push({
                pathname: '/checkout/success/',
                query: {
                    ...router.query
                }
            })
            dispatch(remove_checkout())
            dispatch(delete_qty())
        }
    };


    const handleBackSubmit = async e => {
        e.preventDefault();
        router.back()
    }

    if (router.query.url === undefined && router.query.qty === undefined) {
        return <ErrorPage statusCode={404}/>;
    }

    return (
        <Layout>
            <CheckoutStep title='Проверьте данные' numberStep='2'/>
            <div className="box-content-2">
                <div className="w-full flex flex-wrap justify-center">
                    <div className="box-card-info lg:w-1/3 lg:pt-10">
                        <CheckoutPerson
                            first_name={checkoutState.firstName}
                            last_name={checkoutState.lastName}
                            email={checkoutState.email}
                            tel={checkoutState.tel}
                        />
                    </div>
                    <div className="box-card-info lg:w-2/6 lg:pt-10 lg:ml-16">
                        <CheckoutCart
                            title={tour.title}
                            start_point={tour.start_point}
                            start_date={tour.start_date}
                            finish_date={tour.finish_date}
                            quantity={countState.qty}
                            price={tour.price_rub}
                        />
                    </div>
                    <div className="w-full flex items-center justify-center pt-10 mb-12">
                        <button onClick={handleBackSubmit}
                                className="w-44 text-base font-medium rounded-l-lg p-2 bg-primary-200 hover:bg-primary-100 bg-opacity-60 text-white transition duration-500 ease-in-out transform hover:scale-105">
                            Назад
                        </button>
                        <button type="submit" onClick={handleSubmit}
                                className="w-44 text-base font-medium rounded-r-lg p-2 bg-primary-200 hover:bg-primary-100 text-white transition duration-500 ease-in-out transform hover:scale-105">
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const fetchData = async (url) =>
    await API.get(`tour/${url}/`)
        .then(res => ({
            error: false,
            tour: res.data,
        }))
        .catch(() => ({
            error: true,
            users: null,
        }))

export async function getServerSideProps(context) {
    // const {url} = params;
    const tour = await fetchData(context.query.url);
    if (!tour) {
        return {
            notFound: true,
        }
    }
    return {props: tour}
}

