import Link from 'next/link'
import Card from "../core/Card";
import Head from "next/head";

export default function Tours({ tours }) {
    return (
        <>
            <div className="px-4 mt-24 box-grid-4">
                {tours.map((tours, index) => (
                    <Card key={index}
                          url={tours.url}
                          title={tours.title}
                          price={tours.price_rub}
                          places_quantity_left={tours.places_quantity_left}
                          img={tours.img}
                          start_point={tours.start_point}
                          start_date={tours.start_date}
                          finish_date={tours.finish_date}
                          start_country={tours.start_country}
                          visa={tours.visa}
                          sale={tours.sale}
                    />
                ))}
            </div>
        </>
    )
}