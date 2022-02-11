import Layout from "../components/core/Layout";
import {privacy} from "../data/privacy";


const ItemText = ({title, description}) => {
    return (
        <>
            <div className="flex mt-2 mb-2 w-full">
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

export default function Privacy() {
    return (
        <>
            <Layout
                title={'Политика в отношении обработки персональных данных'}
                description={'Лучшие парусные туры на арендованной яхте | Организация путешествий на яхтах | Идеальный вариант для наслаждения морем | YaBooker'}
            >
                <div className="box-content">
                    <div className="box-item">
                        <h1 className="w-full text-center text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Политика в отношении обработки персональных данных
                        </h1>
                    </div>
                    {privacy.map(item => (
                        <Item key={item.id}
                              {...item} />
                    ))}
                </div>
            </Layout>
        </>
    )
}