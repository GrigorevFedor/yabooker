import moment from "moment";

const Item = ({title, data}) => {
    return (
        <div className="w-full mt-2 mb-2">
            <p className="text-xl font-bold">
                {title}
            </p>
            <p className="text-gray-600">
                {data}
            </p>
        </div>
    )
}

export default function ToursDate({start_point, quantity, start_date, finish_date, type, points, airport, start_country}) {
    return (
        <>
            <div className="flex flex-col">
                <Item title="Начало путешествия" data={`${start_country}, ${start_point}`} />
                <Item title="Когда" data={`${moment(start_date).format('DD.MM')} - ${moment(finish_date).format('DD.MM')}` }/>
                <Item title="Группа" data={`${quantity} человек`} />
                <Item title="Формат" data={type} />
                {/*<Item title="Маршрут" data={points}/>*/}
                <Item title="Аэропорты прилёта" data={airport}/>
            </div>
        </>
    )
}