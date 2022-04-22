export const ReviewCard = ({ review, blank = '' }) => {
    if (blank != '') {
        return (
            <div className="flex overflow-hidden box-card min-w-min py-16 justify-center mt-4">
                {blank}
            </div>
        )
    }
}