import { OrganizeTourCard } from '../organizer/tourCard'

export default function ActiveTours({ active }) {
    if (active.length == 0) {
        return <OrganizeTourCard blank={true} />
    }
    return (
        <>
            {active.map(activeTour => (
                <OrganizeTourCard tour={activeTour} />
            ))}
        </>
    )
}

const fetchData = async (url) =>
    await API.get(`organizer/${url}/tours-active`)
        .then(res => ({
            error: false,
            tours: res.data,
        }))
        .catch(() => ({
            error: true,
            tours: null,
        }))

export async function getServerSideProps({ params, res }) {
    const { slug } = params;
    const active = await fetchData(slug);
    if (!active) {
        return {
            notFound: true,
        }
    }
    console.log(active)
    return { props: active }
}