import Layout from "../../components/core/Layout";
import CheckoutStep from "../../components/checkout/Step";
import Link from 'next/link'
import {useSelector} from "react-redux";
import ErrorPage from "next/error";
import {useRouter} from "next/router";

export default function CheckoutSuccessPage() {
    const router = useRouter()

    if (router.query.url === undefined && router.query.qty === undefined) {
        return <ErrorPage statusCode={404}/>;
    }

    return (
        <>
            <Layout>
                <CheckoutStep title="Успех" numberStep={3}/>
                <div
                    className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 mb-12">
                    
                    <p className="w-full text-center mt-24">Спасибо за заказ, мы свяжемся с вами в ближайшее время!</p>
                    <div className="w-full text-center items-center">
                        <button
                            className="w-44 mt-16 text-base font-medium rounded-lg p-2 bg-primary-200 hover:bg-primary-100 text-white transition duration-500 ease-in-out transform hover:scale-105">
                            <Link href="/">
                                <a>На главную</a>
                            </Link>
                        </button>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2 mt-16 sm:mx-auto text-5xl text-white">
                        <img src={`/Illustration_day.png`} alt='image'/>
                    </div>
                </div>
            </Layout>
        </>
    )
}