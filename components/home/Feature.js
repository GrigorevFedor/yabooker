import Image from "next/image";

export const FeatureItem = ({img, title, description}) => {
    return (
        // <div className="flex flex-col items-center justify-center sm:text-center py-2 px-2">
        //     <div className="flex items-center justify-center w-32 h-32 mb-4 sm:mx-auto text-5xl text-white">
        //             <Image src={`/home/${img}.png`}
        //                  width={130}
        //                  height={130}
        //                  alt={`${title}`}
        //             />
        //         {/*<img src={`/home/${img}.png`} alt='image'/>*/}
        //     </div>
        //     <p className="mb-2 text-2xl font-bold">{title}</p>
        //     <p className="w-11/12 text-2sm text-gray-500 sm:mx-auto">
        //         {description}
        //     </p>
        // </div>

        <div className="flex flex-col justify-start p-8 box-card-info text-left">
            <div className="w-24 h-24 mb-4">
                <Image src={`/home/${img}.png`}
                       width={130}
                       height={130}
                       alt={`${title}`}
                />
                {/*<img src={`/home/${img}.png`} alt='image'/>*/}
            </div>
            <p className="mb-2 text-2xl font-bold">{title}</p>
            <p className="text-2sm text-gray-500 sm:mx-auto">
                {description}
            </p>
        </div>

    )
}

export default function Feature() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-1/2 px-8">
                    <FeatureItem
                        img={'anchor'}
                        title={'Удобство'}
                        description={'Быстрое и интуитивно понятное бронирование с безопасной оплатой через известные платежные системы. ' +
                        'Наша задача облегчить путь путешественника от выбора яхтенного путешествия до его размещения на яхте. Если у вас в ходе подготовки возникнут вопросы, вы всегда можете связаться с нами в Telegram @yabookercom для их оперативного решения"'}
                    />
                </div>
                <div className="w-1/2 px-8 mt-8">
                    <FeatureItem
                        img={'anchor'}
                        title={'Удобство'}
                        description={'Все отзывы, оставленные на платформе – это оценка от путешественников, которые покупали тур через нашу платформу и провели свой отдых на яхте, как было запланировано. Отказники не могут оставить отзыв. Отзыв — это субъективная оценка конкретного путешественника. Наша платформа никак не влияет на формирование репутации капитана. Мы лишь способствуем сбору отзывов со всех состоявшихся путешественников для более объективной оценки капитана, чтобы и другие путешествующие могли сделать свой выбор основываясь на ней'}
                    />
                </div>
                <div className="w-1/2 px-8 -mt-16">
                    <FeatureItem
                        img={'anchor'}
                        title={'Удобство'}
                        description={'Быстрое и интуитивно понятное бронирование с безопасной оплатой через известные платежные системы. ' +
                        'Наша задача облегчить путь путешественника от выбора яхтенного путешествия до его размещения на яхте. Если у вас в ходе подготовки возникнут вопросы, вы всегда можете связаться с нами в Telegram @yabookercom для их оперативного решения"'}
                    />
                </div>
                <div className="w-1/2 px-8 mt-8">
                    <FeatureItem
                        img={'anchor'}
                        title={'Удобство'}
                        description={'Быстрое и интуитивно понятное бронирование с безопасной оплатой через известные платежные системы. ' +
                        'Наша задача облегчить путь путешественника от выбора яхтенного путешествия до его размещения на яхте. Если у вас в ходе подготовки возникнут вопросы, вы всегда можете связаться с нами в Telegram @yabookercom для их оперативного решения"'}
                    />
                </div>
            </div>
        </>
    );
}
;