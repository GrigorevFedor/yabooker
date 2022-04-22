import Layout from "../../components/core/Layout";
import ErrorPage from "next/error";
import API from "../../api";
import ActiveTours from '../../components/organizer/active'
import Reviews from '../../components/organizer/reviews'
import NotActiveTours from '../../components/organizer/notActive'
import { useState } from "react";
import { Stars } from '../../components/tours/Reviews'



export default function OrganizerPage({ organizer, active, notActive, comments }) {
    // console.log('organizer.middle_star', organizer.middle_star)
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
            <div className='flex flex-col lg:flex-row box-content-2'>
                <div className='w-full lg:w-1/3 box-border flex flex-col items-center'>
                    <div className='w-64 h-64 rounded-full border-4 border-yellow-200/75 overflow-hidden box-border mb-4'>
                        <img className="object-cover relative" style={{ width: '100%', height: '100%' }}
                            src={`https://api.yabooker.com/${organizer.user.avatar}`}
                            alt={organizer.title} />
                    </div>
                    <div className='flex items-center justify-around mb-6'>
                        <p className="font-bold ml-6">{organizer.middle_star ? organizer.middle_star : 0}</p>
                        <Stars count={5} fullfiled={5} />
                    </div>
                </div>
                <div className='w-full lg:w-2/3'>
                    <div className='text-center lg:text-left'>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            {`${organizer.user.first_name} ${organizer.user.last_name}`}
                        </h2>
                        <p className='text-blue-300 font-light text-sm sm:text-base md:text-sm'>
                            Капитан
                        </p>
                        <p>
                            {`О себе:
                            ${organizer.description}`}
                        </p>
                        <div className='flex justify-evenly  lg:justify-start'>
                            <div className='lg:mr-16'>
                                <p className="block font-extrabold text-3xl">5</p>
                                <p className="block">Лет</p>
                            </div>
                            <div className='lg:mr-16'>
                                <p className="block font-extrabold text-3xl">{organizer.tours_count}</p>
                                <p className="block">Туров</p>
                            </div>
                            <div className='lg:mr-16'>
                                <p className="block font-extrabold text-3xl">112</p>
                                <p className="block">Путешественников</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200">
                        <div className="-mb-px flex px-4 justify-around" role="tablist">
                            {/* <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" --> */}
                            <button className={`text-gray-900 flex-1 whitespace-nowrap py-4 px-1 text-base font-medium box-border ${activeTab == 'ActiveTours' ? 'border-b border-blue-300' : ''}`} onClick={handlerClick} type="button" name="ActiveTours">Активные туры</button>
                            <button className={`text-gray-900 flex-1 whitespace-nowrap py-4 px-1 text-base font-medium ${activeTab == 'Reviews' ? 'border-b border-blue-300' : ''}`} onClick={handlerClick} type="button" name="Reviews">Отзывы</button>
                            {/* <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Флот</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Команда</button>
                            <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Истории</button> */}
                            <button className={`text-gray-900 flex-1 whitespace-nowrap py-4 px-1 text-base font-medium ${activeTab == 'NotActiveTours' ? 'border-b border-blue-300' : ''}`} onClick={handlerClick} type="button" name="NotActiveTours">Прошедшие туры</button>
                        </div>
                    </div>

                    <div>
                        {activeTab == 'ActiveTours' && <ActiveTours active={active} />}
                        {activeTab == 'Reviews' && <Reviews reviews={[]} />}
                        {/* {activeTab == 'Fleet' && <Fleet/>}
                        {activeTab == 'Team' && <Team/>}
                        {activeTab == 'Articles' && <Articles/>} */}
                        {activeTab == 'NotActiveTours' && <NotActiveTours notActive={notActive} />}
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