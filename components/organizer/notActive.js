import { OrganizeTourCard } from '../organizer/tourCard'


export default function NotActiveTours({ notActive }) {
    if (notActive.length == 0) {
        return <OrganizeTourCard blank={'У капитана нет прошедших путешествий'} />
    }
    return (
        <>
            {notActive.map(notActiveTour => (
                <OrganizeTourCard key={notActiveTour.url} tour={notActiveTour} />
            ))}
        </>
    )
}