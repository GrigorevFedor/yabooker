import Image from 'next/image';
import {Popover} from '@headlessui/react'

const Item = ({number, title, description}) => {
    return (
        <>
            <div className="lg:w-1/6">
                {/*<div className="z-0 h-44 w-full py-4 text-center flex flex-col items-center justify-center rounded-lg text-xl font-bold*/}
                {/*    group-hover:text-white group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-primary-200 group-hover:to-primary-300">*/}
                {/*    {number !== 2 && number !== 4 && number !== 5 ?*/}
                {/*        <div className="-mt-14 -mr-64 hidden lg:block"><Image src="/arrow.svg" width="70" height="50"/></div>*/}
                {/*        : null*/}
                {/*    }*/}
                {/*    <div*/}
                {/*        className="flex items-center justify-center shadow-lg bg-primary-300 rounded-full h-16 w-16 text-white group-hover:bg-white group-hover:text-primary-300 ring-4 ring-primary-300 ring-opacity-50">*/}
                {/*        <p>{number}</p>*/}
                {/*    </div>*/}
                {/*    <p className="mt-4 px-4">{title}</p>*/}
                {/*    {number !== 1 && number !== 3 && number !== 5 ?*/}
                {/*        <div className="-mb-16 -mr-64 hidden lg:block"><Image src="/arrow_2.svg" width="70" height="50"/></div>*/}
                {/*        : null*/}
                {/*    }*/}
                {/*</div>*/}
                {/*<div className="absolute flex flex-col items-center hidden rounded-lg mt-4 group-hover:flex group-hover:ring-1 group-hover:ring-gray-200 group-hover:ring-opacity-50">*/}
                {/*    /!*<div className="w-3 h-3 -mb-2 rotate-45 bg-gray-200 -ml-24"/>*!/*/}
                {/*    <span className="w-80 relative z-10 p-4 text-sm leading-none whitespace-no-wrap bg-white shadow-lg rounded-lg">{description}</span>*/}
                {/*</div>*/}
                <Popover className="relative">
                    <Popover.Button>
                        <div className="h-44 w-56 py-4 text-center flex flex-col items-center justify-center rounded-lg text-xl font-bold
                            hover:text-white hover:shadow-lg hover:bg-gradient-to-r hover:from-primary-200 hover:to-primary-300">
                            {number !== 2 && number !== 4 && number !== 5 ?
                                <div className="-mt-14 -mr-64 hidden lg:block">
                                    <Image src="/arrow.svg" width="70" height="50"/>
                                </div>
                                : null
                            }
                            <div
                                className="flex items-center justify-center shadow-lg bg-primary-300 rounded-full h-16 w-16
                                text-white hover:bg-white hover:text-primary-300 ring-4 ring-primary-300 ring-opacity-50">
                                <p>{number}</p>
                            </div>
                            <p className="mt-4 px-4">{title}</p>
                            {number !== 1 && number !== 3 && number !== 5 ?
                                <div className="-mb-16 -mr-64 hidden lg:block">
                                    <Image src="/arrow_2.svg" width="70" height="50"/></div>
                                : null
                            }
                        </div>
                    </Popover.Button>
                    <Popover.Panel
                        className="absolute z-10 bg-white shadow-lg rounded-lg p-4 w-80 mt-4 lg:-ml-16 -ml-12 ring-1 ring-black ring-opacity-5">
                        <span className="w-80 text-sm leading-none whitespace-no-wrap ">{description}</span>
                    </Popover.Panel>
                </Popover>

            </div>
        </>
    )
}

export default function TourBooking() {
    return (
        <>
            <div className="flex flex-wrap lg:justify-between justify-center">
                <Item number={1} title={'Данные для ваучера'}
                      description={'Вы указываете свои данные: имя и фамилию на кого выписывается ваучер на путешествие. Также указываете почту, на которую мы вышлем подтверждение о бронировании. Телефон указывается для связи в непредвиденном случае и для своевременного напоминания о предстоящем путешествии.'}/>
                <Item number={2} title={'Подтверждение бронирования'}
                      description={'Вам на почту придет письмо, что ваше бронирование оформлено и ожидает подтверждения организатора. Обычно это занимает не более 24 часов.'}/>
                <Item number={3} title={'Внесение предоплаты'}
                      description={'После подтверждения места организатором, вам придет ссылка на оплату. Оплату необходимо будет провести в течение 48 часов.'}/>
                <Item number={4} title={'Получение ваучера'}
                      description={'После оплаты, вам на почту поступит ваучер с подробностями о путешествии.'}/>
                <Item number={5} title={'Что дальше?'}
                      description={'До начала вашего путешествия мы будем присылать вам чек-листы для сбора документов и вещей в путешествие, рекомендации как обеспечить себе наилучший яхтенный опыт, интересные факты о стране назначения, а также заблаговременное напоминание о предстоящем путешествии.'}/>
            </div>
        </>
    )
}