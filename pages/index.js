import Hero from "../components/home/Hero";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import Feature from "../components/home/Feature";
import Heading from "../components/core/Heading";
import Tours from "../components/home/Tours";
import { feature } from "../data/feature";
import API from "../api";
import Link from "next/link";
import Layout from "../components/core/Layout";
import HeroNew from "../components/home/HeroNew";
import FeatureNew from "../components/home/FeatureNew";

export default function Home({ tours, countries }) {

    return (
        <Layout
            title='YaBooker'
            description='Отдых и путешествия на яхте от лучших капитанов-предлагаем доступный отдых на яхте | Аренда яхт | YaBooker'
        >
            <div className="h-screen bg-hero-background bg-cover bg-center bg-no-repeat">
                <HeroNew countries={countries.countries} />
            </div>
            <main>
                <div className="box-content mt-12">
                    <Heading id="tours" title="Ближайшие путешествия" />
                    <Tours tours={tours.tours} />
                    <div className="lg:mb-24 mb-12 mt-12 flex items-center justify-center">
                        <Link href="/tours">
                            <button className="w-44 font-medium rounded-lg p-2 ring-4 ring-primary-200 ring-opacity-50">
                                Смотреть еще
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="py-8">
                    <div className="box-content lg:mt-24 mt-12">
                        <FeatureNew />
                    </div>
                </div>
                <div className="box-content lg:mt-24 mt-12">
                    <Heading id="faq" title="Часто задаваемые вопросы" />
                    <FAQ />
                </div>
            </main>
            <div className="h-full bg-footer-background_i bg-no-repeat bg-cover bg-center w-full">
                <div id="contact" className="h-full bg-gradient-to-b via-transparent from-white px-4 py-24">
                    <Contact />
                </div>
            </div>
        </Layout>
    )
}

const fetchDataCountries = async () =>
    await API.get('tours/countries/')
        .then(res => ({
            error: false,
            countries: res.data,
        }))
        .catch(() => ({
            error: true,
        }))


const fetchData = async () =>
    await API.get('tours/', {
        params: {
            limit: 4
        }
    })
        .then(res => ({
            error: false,
            tours: res.data.results,
        }))
        .catch(() => ({
            error: true,
        }))

export async function getServerSideProps() {
    const tours = await fetchData();
    const countries = await fetchDataCountries()
    if (tours.error) {
        return {
            notFound: true,
        }
    }
    return { props: { tours, countries } }
}
