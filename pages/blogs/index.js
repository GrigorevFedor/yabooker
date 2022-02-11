import Layout from "../../components/core/Layout"
import Card from "../../components/news/Card"
import API from "../../api";



export default function BlogsPage ({ blogs }){
    return (
        <Layout
            title={"Статьи о яхтинге от Yabooker"}
            description={"Узнавай о яхтенге от любителей и профессионалов своего дела. Еженедельно новые и интересные статьи по различным тематикам"}
        >
            <div className="box-content">
                <div className="box-item">
                    <h1 className="w-full text-center text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Блог
                    </h1>
                    <Card blogs={blogs}/>
                </div>
            </div>
        </Layout>
    )
}

const fetchData = async () =>
    await API.get('blogs/')
        .then(res => ({
            error: false,
            blogs: res.data,
        }))
        .catch(() => ({
            error: true,
        }))

export async function getServerSideProps() {
    const blogs = await fetchData();
    if (!blogs) {
        return {
            notFound: true,
        }
    }
    return {props: blogs}
}
