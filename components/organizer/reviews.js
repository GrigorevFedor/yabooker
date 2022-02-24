import { ReviewCard } from './reviewCard'

export default function Reviews({ reviews, blank = '' }) {

    if (reviews.length == 0) {
        return <ReviewCard blank={'Капитан еще не получил отзывов, будьте первыми!'} />
    }
    return (
        <>
            {reviews.map(review => (
                <ReviewCard review={review} />
            ))}
        </>
    )
}