import Navbar from "./Navbar";
import Footer from "./Footer";
import {Html} from 'next/document'
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";
import CookiesBar from "./Cookie";
import Scroller from "./TopButton";
import WidgetContact from "./WhatsApp";

export default function Layout({ title, description, children }) {
    const {asPath} = useRouter()
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={`https://yabooker.com${asPath}`}
                openGraph={{
                    type: 'website',
                    url: `https://yabooker.com${asPath}`,
                    title: {title},
                    description: {description}
                }}
            />
            <Navbar/>
            <div className="min-h-screen w-full mx-auto">
                {children}
            </div>
            <Footer/>
            <CookiesBar/>
            <Scroller />
            <WidgetContact />
        </>
    )
}