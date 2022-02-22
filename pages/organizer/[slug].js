import Layout from "../../components/core/Layout";
import ErrorPage from "next/error";
import API from "../../api";
import ActiveTours from '../../components/organizer/active'
import Reviews from '../../components/organizer/reviews'
import NotActiveTours from '../../components/organizer/notActive'
import { useState } from "react";
import { Stars } from '../../components/tours/Reviews'



export default function OrganizerPage({ organizer, active, notActive, comments}) {
    console.log('organizer', organizer)
    if (!organizer) {
        return <ErrorPage statusCode={404} />;
    }
    const [activeTab, setActiveTab] = useState('ActiveTours')


    const handlerClick = (e) => {
        setActiveTab(e.target.name)
    }

    return (
        <Layout
            title={'Туры на парусной яхте от Yabooker'}
            description={'Большое разнообразие направлений туров и маршрутов яхт. Поможем выбрать тур подходящий именно вам.'}
        >
            <div className='flex'>
                <div className='w-1/3'>
                    <div className=''>

                    </div>
                    <div className='flex'>
                        <p>{organizer.middle_star}</p>
                        <Stars count={5} fullfiled={5} />
                    </div>
                </div>
                <div className='w-2/3'>
                    <div className=''>
                        <h2>
                            {`${organizer.user.first_name} ${organizer.user.last_name}`}
                        </h2>
                        <p>
                            Капитан
                        </p>
                        <p>
                            {`О себе:
                            ${organizer.description}`}
                        </p>
                        <div className='flex'>
                            <div className=''>
                                <p>5</p>
                                <p>Лет</p>
                            </div>
                            <div className=''>
                                <p>{organizer.tours_count}</p>
                                <p>Туров</p>
                            </div>
                            <div className=''>
                                <p>112</p>
                                <p>Путешественников</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200">
                        <div className="-mb-px flex px-4 space-x-8" role="tablist">
                            {/* <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" --> */}
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" onClick={handlerClick} type="button" name="ActiveTours">Активные туры</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" onClick={handlerClick} type="button"  name="Reviews">Отзывы</button>
                            {/* <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Флот</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Команда</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Истории</button> */}
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" onClick={handlerClick} type="button"  name="NotActiveTours">Прошедшие туры</button>
                        </div>
                    </div>

                    <div>
                        {activeTab == 'ActiveTours' && <ActiveTours active={active}/>}
                        {activeTab == 'Reviews' && <Reviews/>}
                        {/* {activeTab == 'Fleet' && <Fleet/>}
                        {activeTab == 'Team' && <Team/>}
                        {activeTab == 'Articles' && <Articles/>} */}
                        {activeTab == 'NotActiveTours' && <NotActiveTours notActive={notActive}/>} 
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export async function getServerSideProps({ params, res }) {
    const { slug } = params;
    const [organizerRes, activeRes, notActiveRes] = await Promise.all([
        API.get(`organizer/${slug}/`),
        API.get(`organizer/${slug}/tours-active`),
        API.get(`organizer/${slug}/tours-not-active`)
        // API.get(`organizer/${slug}/comments`)
    ]);
    const [organizer, active, notActive] = await Promise.all([
        organizerRes.data,
        activeRes.data.tours,
        notActiveRes.data.tours,
        // commentsRes.data.tours
    ]);
    return { props: { organizer, active, notActive } };
}