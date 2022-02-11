import Layout from "../components/core/Layout";

export default function Custom404() {
    return (
        <>
            <Layout
                title={'Ошибка 404'}
            >
                <h1 className="text-center mt-16 text-2xl font-bold">404 - Такой страницы несуществует :(</h1>
                <div className="flex items-center justify-center lg:w-1/3 mt-16 sm:mx-auto text-5xl text-white">
                    <img src={`/Illustration_day.png`} alt='image'/>
                </div>
                <div className="w-full text-center items-center">
                    <button
                        className="w-44 mt-16 text-base font-medium rounded-lg p-2 bg-primary-200 hover:bg-primary-100 text-white transition duration-500 ease-in-out transform hover:scale-105">
                        <a href="/">Главная страница</a>
                    </button>
                </div>
            </Layout>
        </>
    )
}