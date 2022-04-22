import React, { useEffect, useState } from 'react';
import ErrorPage from "next/error";
import API from '/api';

import Layout from "../../components/core/Layout";
import TourHero from "../../components/tours/Hero";
import TourInfo from "../../components/tours/MoreInfo";
import TourAppeal from "../../components/tours/Appeal";

import { tourAppeal } from "../../data/tourAppeal";
import TourYachtDetail from "../../components/tours/YachtDetail";
import TourRoutes from "../../components/tours/Routes";
import TourImg from "../../components/tours/Img";
import TourBooking from "../../components/tours/Booking";
import Reviews from "../../components/tours/Reviews"
import StickyBar from "../../components/tours/Bar";
import ImportantBlock from "../../components/tours/Important";


export default function TourDetailPage({ tour }) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);


    if (!tour) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout
            title={tour.title_seo}
            description={tour.description_seo}
            url={tour.url}
        >
            <div className="w-full mx-auto">
                <TourHero
                    id={tour.id}
                    url={tour.url}
                    title={tour.title}
                    description={tour.description}
                    price={tour.price}
                    start_country={tour.start_country}
                    start_point={tour.start_point}
                    marina={tour.marina}
                    start_date={tour.start_date}
                    finish_date={tour.finish_date}
                    organizer={tour.organizer}
                    airport={tour.airport}
                    qty={tour.places_quantity_left}
                    quantity={tour.places_quantity}
                    type={tour.type.name}
                    years={tour.years}
                    yachtType={tour.yacht.type.name}
                    level={tour.level}
                />
                <div className="box-content-2">
                    <div id="date" className="lg:flex lg:flex-wrap w-full">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mt-8">
                                О путешествии
                            </h2>
                            <span
                                className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                            <p className="lg:mr-20 text-gray-500 mt-8">
                                {tour.description}
                            </p>
                        </div>
                        <div className="lg:w-1/2 lg:mt-0">
                            <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mt-8">
                                Условия
                            </h2>
                            <span
                                className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                            <div className="mt-8">
                                <TourInfo />
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="w-full text-left">
                            <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mt-8">
                                Как забронировать тур
                            </h2>
                            <span
                                className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                        </div>
                        <div className="mt-24">
                            <TourBooking />
                        </div>
                        <div className="mt-12 mb-12">
                            <div className="w-full text-left">
                                <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mt-8">
                                    Галерея
                                </h2>
                                <span
                                    className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                            </div>
                            <div className="mt-16">
                                <TourImg photos={tour.tours_img} />
                            </div>
                        </div>
                        <div className="mt-8 mb-12">
                            <div id="date"
                                className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-5">
                                <TourRoutes tours_route={tour.tours_route} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-tour-appeal_i bg-cover bg-center bg-no-repeat">
                    <div className="w-full bg-black bg-opacity-40">
                        <div className="flex flex-wrap box-content-2">
                            <div className="box-grid-3 mt-8 mb-8">
                                {tourAppeal.map(tourAppeal => (
                                    <TourAppeal key={tourAppeal.id} number={tourAppeal.id} title={tourAppeal.title}
                                        description={tourAppeal.description} />
                                ))}
                            </div>
                            <div className="w-full hidden lg:block text-2xl text-white text-right mt-24">
                                <p>«Там, в море, ты в действительности ‘ты сам’» </p>
                                <p>Вито Дюма (VitoDumas)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                <div className="w-full text-left">
                    <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mt-8">
                        Проживание
                    </h2>
                    <span className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                </div>
                <TourYachtDetail key={tour.url}
                    name={tour.yacht.title}
                    description={tour.yacht.description}
                    year={tour.yacht.year}
                    type={tour.yacht.type.name}
                    size={tour.yacht.size}
                    img={tour.yacht.img}
                    yacht_more={tour.yacht.yacht_more}
                    yacht_img={tour.yacht.yacht_img}
                />
            </div>
            <div className="flex flex-wrap px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                <ImportantBlock />
            </div>
            <Reviews comments={tour.comment_tour} middle_star={tour.middle_star} />
            {offset <= 600 ? '' :
                <StickyBar
                    id={tour.id}
                    url={tour.url}
                    title={tour.title}
                    start_date={tour.start_date}
                    finish_date={tour.finish_date}
                    price={tour.price}
                    start_point={tour.start_point}
                    qty={tour.places_quantity_left}
                />
            }
            {/*<div className="box-content-2 mt-8 mb-12 w-full rounded-lg">*/}
            {/*    <MapsV1 />*/}
            {/*</div>*/}
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

export async function getServerSideProps({ params, res }) {
    const { slug } = params;
    const tour = await fetchData(slug);
    console.log(tour)
    if (tour.error) {
        return {
            notFound: true,
        }
    }
    return { props: tour }
}