import Layout from "../../components/core/Layout";
import API from "../../api";
import {Markup} from "interweave";
import moment from "moment";
import {FaArrowLeft, FaRegClock} from "react-icons/fa";
import {useRouter, withRouter} from 'next/router'
import {
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton, OKIcon, OKShareButton,
    TelegramIcon, TelegramShareButton,
    TwitterIcon, TwitterShareButton, VKIcon, VKShareButton, WhatsappIcon, WhatsappShareButton
} from "react-share";
import ShareButton from "../../components/core/ShareButton";
import { Reactions } from "../../components/core/Reactions"


export default function BlogDetailPage({blog}) {
    const router = useRouter()
    const sectionStyle = {
        width: "100%",
        height: "400px",
        borderRadius: "8px",
        backgroundImage: `url(${'https://api.yabooker.com' + blog.img})`,
    };

    const urlShareButton = `https://yabooker.com/blogs/${blog.url}`

    return (
        <>
            <Layout
                title={blog.title_seo}
                description={blog.description}>
                <div className="box-content-2">
                    <button
                        className="flex items-center justify-center bg-white rounded-lg w-10 h-10 p-2 mt-8 lg:absolute lg:ml-8 shadow-lg"
                        onClick={() => router.back()}>
                        <FaArrowLeft/>
                    </button>
                    <div className={`flex flex-col justify-start mt-4 lg:px-28 bg-cover bg-center`}
                         style={sectionStyle}>

                        {/*<p className="ml-2">Yabooker</p>*/}
                        {/*<p className="ml-2">Ivanova</p>*/}
                        <div
                            className="lg:bg-white lg:p-8 lg:rounded-lg lg:mt-64 mt-20 text-white lg:text-black bg-gray-800 bg-opacity-40 h-full w-full shadow-t-lg">
                            <div className="flex item-start lg:justify-end justify-center">
                                <FaRegClock className="h-6"/>
                                <p className="ml-2">
                                    {moment(blog.created_date).format('DD.MM.YY')}
                                </p>
                            </div>
                            <h1 className="text-4xl text-center font-bold w-full mt-8">
                                {blog.title}
                            </h1>
                        </div>
                    </div>
                    <div className="lg:mt-20 mt-8 lg:px-36 mb-16">
                        <Markup content={blog.body}/>
                        <Reactions articleId={blog.url}/>
                        <div className="flex justify-center">
                            
                            <ShareButton url={urlShareButton}/>
                        </div>
                    </div>


                    {/*<div className="w-full rounded-lg border border-gray-50 mt-8">*/}
                    {/*    <img src={blog.img} style={{width: '600px', height: '100%'}} alt={blog.title}/>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    className="-mt-20 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12">*/}
                    {/*    <div className="lg:flex lg:flex-wrap items-center justify-center box-card-info p-8 w-full">*/}
                    {/*        <h1 className="text-xl font-bold w-full">*/}
                    {/*            {blog.title}*/}
                    {/*        </h1>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Layout>
        </>
    )
}

const fetchData = async (url) =>
    await API.get(`blog/${url}/`)
        .then(res => ({
            error: false,
            blog: res.data,
        }))
        .catch(() => ({
            error: true,
            users: null,
        }))

export async function getServerSideProps({params, res}) {
    const {slug} = params;
    const blog = await fetchData(slug);
    if (!blog) {
        return {
            notFound: true,
        }
    }
    return {props: blog}
}