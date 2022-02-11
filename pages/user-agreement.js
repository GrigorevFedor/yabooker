import Layout from "../components/core/Layout";
import {agreement} from "../data/agreement";


const ItemText = ({title, description}) => {
    return (
        <>
            <div className="flex mt-2 mb-2">
                <p className="w-12 font-bold">{title}</p>
                <p className="w-10/12">{description}</p>
            </div>
        </>
    )
}

const Item = ({title, items}) => {
    return (
        <div className="flex flex-wrap justify-start w-full box-content-2">
            <p className="w-full font-bold">{title}</p>
            {items.map(item => (
                <ItemText key={item.title} {...item} />
            ))}
        </div>
    )
}

export default function Agreement() {
    return (
        <>
            <Layout
                title={'Публичная оферта'}
                description={'Лучшие парусные туры на арендованной яхте | Организация путешествий на яхтах | Идеальный вариант для наслаждения морем | YaBooker'}
            >
                <div className="box-content">
                    <div className="box-item">
                        <h1 className="w-full text-center text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Публичная оферта YABOOKER.COM
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-start w-full box-content-2">
                        <h2 className="w-full font-bold tracking-tight mb-4">
                            СОГЛАШЕНИЕ
                        </h2>
                        <h2 className="w-full font-bold tracking-tight mb-4">
                            Редакция от 01.10.2021 г.
                        </h2>
                        <h2 className="w-full tracking-tight mb-4">
                            Владелец домена YaBooker.com («Администратор»), с одной стороны, и пользователь сети
                            Интернет, именуемый
                            в дальнейшем «Пользователь», с другой стороны, совместно именуемые «Стороны», заключили
                            настоящее
                            пользовательское соглашение («Соглашение») по поводу использования Сайта и Платформы на
                            условиях,
                            указанных в настоящем Соглашении.
                            В соответствии со статьей 435 и частью 2 статьи 437 ГК РФ Соглашение является публичной
                            офертой
                            (предложением) Администратора в адрес неограниченного числа лиц, пользователей сети
                            Интернет.
                            Соглашение (без каких-либо оговорок и исключений) вступает в силу с момента принятия
                            Пользователем
                            условий настоящего Соглашения (акцепт), которым считается и является совершение
                            Пользователем одного из
                            указанных действий: подтверждение Пользователем согласия с условиями Соглашения, совершение
                            Пользователем действий по использованию Сайта, доступу к Сайту, использование отдельных
                            опций,
                            предлагаемых на Сайте или осуществление Пользователем платежа за путешествие или за иные
                            услуги и
                            сервисы, предлагаемые на Сайте.
                        </h2>
                    </div>

                    {agreement.map(item => (
                        <Item key={item.id}
                              {...item} />
                    ))}
                </div>
            </Layout>
        </>
    )
}