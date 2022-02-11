import Image from "next/image";

export default function ImportantBlock() {
    return (
        <>
            <div className="box-content lg:mt-8 mt-12 mb-8">
                <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                    Важная информация
                </h2>
                <span className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-center bg-no-repeat mt-12 px-4 bg-important-background">
                    <ImportantItem title={'Условия оплаты'}
                        desc={'Оплата производится в течение 48 часов после подтверждения организатором свободного места на выбранной яхте. ' +
                            'Предоплата вносится в размере 50% от стоимости путешествия.'} />
                    <ImportantItem title={'Обратите внимание'}
                        desc={'Все наши маршруты тщательно продуманы, но с целью гарантии безопасности и обеспечения комфорта, программа путешествия и маршрут могут корректироваться капитаном, исходя из погодных условий, а также опыта и готовности участников.'} />
                    <ImportantItem title={'Возврат предоплаты'}
                        desc={'Отказ от места в течение 24 часов с момента бронирования - без санкций. Далее действуют следующие условия.' +
                            'Последние два слова сделать кликабельными и ссылку на позицию в факе по остальной части текста'} />
                    <ImportantItem title={'Уровень сложности и формат'}
                        desc={'Просим обратить внимание на уровень сложности и формат путешествия. Есть существенная разница в условиях комфорта при семейном путешествии и при спортивном мероприятии. '} />
                </div>
            </div>
        </>
    )
}

const ImportantItem = ({ title, desc }) => {
    return (
        <>
            <div className="z-10 rounded-lg box-card-info p-8 lg:mb-12">
                <p className="text-xl font-bold mb-4">{title}</p>
                <p className="text-gray-500 lg:line-clamp-3">{desc}</p>
                <div className="flex items-center justify-end mt-4">
                    <button className="px-4 bg-primary-900 h-10 rounded-lg">Подробнее</button>
                </div>
            </div>
        </>
    )
}