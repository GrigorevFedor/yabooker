import Layout from "../../components/core/Layout";
import ErrorPage from "next/error";
import API from "../../api";
import ActiveTours from '../../components/organizer/active'
import { useState } from "react";
import { Stars } from '../../components/tours/Reviews'



export default function OrganizerPage({ organizer }) {
    console.log('organizer', organizer)
    if (!organizer) {
        return <ErrorPage statusCode={404} />;
    }
    const [activeTab, setActiveTab] = useState('ActiveTours')


    const handlerClick = (e) => {
        console.log(e)
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
                        <p>4,9</p>
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
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" onClick={handlerClick()} type="button">Активные туры</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Отзывы</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Флот</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Команда</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Истории</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Прошедшие туры</button>
                        </div>
                    </div>

                    <div>
                        {/* {activeTab == 'ActiveTours' && <ActiveTours />} */}
                        {/* {activeTab == 'Reviews' && <Reviews/>}
                        {activeTab == 'Fleet' && <Fleet/>}
                        {activeTab == 'Team' && <Team/>}
                        {activeTab == 'Articles' && <Articles/>}
                        {activeTab == 'NonActiveTours' && <NonActiveTours/>} */}
                    </div>
                </div>
            </div>

        </Layout>
    )
}

const fetchData = async (url) =>
    await API.get(`organizer/${url}/`)
        .then(res => ({
            error: false,
            organizer: res.data,
        }))
        .catch(() => ({
            error: true,
            organizer: null,
        }))

export async function getServerSideProps({ params, res }) {
    const { slug } = params;
    const organizer = await fetchData(slug);
    console.log(organizer)
    if (!organizer) {
        return {
            notFound: true,
        }
    }
    return { props: organizer }
}