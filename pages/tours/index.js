import Layout from "../../components/core/Layout";
import ErrorPage from "next/error";
import API from "../../api";
import ToursFilter from "../../components/tour/Filters";


export default function ToursPage({ tours }) {
    if (!tours) {
        return <ErrorPage statusCode={404} />;
    }
    console.log('tours', tours)
    return (
        <Layout
            title={'Туры на парусной яхте от Yabooker'}
            description={'Большое разнообразие направлений туров и маршрутов яхт. Поможем выбрать тур подходящий именно вам.'}
        >
            <div className="box-content">
                <div className="box-item">
                    <h1 className="w-full text-center text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Путешествия
                    </h1>
                    <ToursFilter tours={tours} />
                </div>
            </div>
        </Layout>
    )
}

const fetchData = async () =>
    await API.get('tours/')
        .then(res => ({
            error: false,
            tours: res.data,
        }))
        .catch(() => ({
            error: true,
            tours: null,
        }))

export async function getServerSideProps() {
    const tours = await fetchData();
    if (!tours) {
        return {
            notFound: true,
        }
    }
    console.log('fetched tours', tours)
    return { props: tours }
}