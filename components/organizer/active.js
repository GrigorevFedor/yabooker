import { OrganizeTourCard } from '../organizer/tourCard'


export default function ActiveTours({ active }) {
    if (active.length == 0) {
        return <OrganizeTourCard blank={'У капитана нет активных путешествий'} />
    }
    return (
        <>
            {active.map(activeTour => (
                <OrganizeTourCard tour={activeTour}/>
            ))}
        </>
    )
}