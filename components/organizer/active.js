export default function ActiveTours({ active }) {
    return (
        <>
            {active.map(activeTour => (
                <>
                </>
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
    return { props: active }
}