import Card from "../core/Card";

export default function ListCard({ tours }) {
    return (
        <>
            <div className="px-4 box-grid-3">
                {tours.map(tour => (
                    <Card key={tour.url}
                          url={tour.url}
                          title={tour.title}
                          price={tour.price_rub}
                          places_quantity_left={tour.places_quantity_left}
                          img={tour.img}
                          start_point={tour.start_point}
                          start_date={tour.start_date}
                          finish_date={tour.finish_date}
                          start_country={tour.start_country}
                          visa={tour.visa}
                          sale={tour.sale}
                          middle_star={tour.middle_star}
                    />
                ))}
            </div>
        </>
    )
}