import Link from 'next/link'
import moment from 'moment'

export const OrganizeTourCard = ({ tour, blank = '' }) => {
    if (blank != '') {
        return (
            <>
                {blank}
            </>
        )
    }

    function date() {
        return Math.ceil((new Date(tour.finish_date) - new Date(tour.start_date)) / (1000 * 60 * 60 * 24))
    }

    return (
        <div className='my-4'>
            <Link href="/tours/[slug]" as={`/tours/${tour.url}`}>
                <a>
                    <div className="flex overflow-hidden box-card min-w-min">
                        <div className="w-1/2">
                            <img className="object-cover relative" style={{ width: '100%', height: 350 }}
                                src={`https://api.yabooker.com/${tour.img}`}
                                alt={tour.title} />
                        </div>
                        <div className="w-1/2 p-4">
                            <p className="font-bold text-2xl text-primary-400 mt-2">{tour.title}</p>

                            <p className='text-lg font-bold'>Когда</p>
                            <p className="font-light text-sm sm:text-base md:text-sm">{moment(tour.start_date).format('DD.MM.YY')} - {moment(tour.finish_date).format('DD.MM.YY')}
                                <span className="ml-2">({date() + 1} дн.)</span>
                            </p>
                            <p className='text-lg font-bold'>Группа</p>
                            <p className='font-light text-sm sm:text-base md:text-sm'>Нету апи</p>
                            <p className='text-lg font-bold'>Формат и место</p>
                            <p className='font-light text-sm sm:text-base md:text-sm'>Нету апи</p>
                        </div>
                    </div>

                </a>
            </Link>
        </div>
    )
}