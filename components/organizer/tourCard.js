export const OrganizeTourCard = ({ tour, blank = false }) => {

    if (blank) {
        return (
            <>
                У капитана нет активных путешествий
            </>
        )
    }
    return (
        <>
            <Link href="/tours/[slug]" as={`/tours/${tour.url}`}>
                <a>
                    <div className="flex flex-col overflow-hidden box-card min-w-min">
                        <img className="object-cover relative" style={{ width: '100%', height: 350 }}
                            src={tour.img}
                            alt={tour.title} />

                    </div>
                </a>
            </Link>
        </>
    )
}