import Link from "next/link"
import { Markup } from 'interweave';
import moment from "moment";
import { MiniReactions } from "../../components/core/Reactions"

const Card = ({ blogs }) => {
    const getTheWord = (number) => {
        const textForms = ['комментарий', 'комментария', 'комментариев']
        let num = Math.abs(number) % 100;
        let num1 = num % 10;
        if (num > 10 && num < 20) {
            return `${number}  ${textForms[2]}`;
        }
        if (num1 > 1 && num1 < 5) {
            return `${number}  ${textForms[1]}`;
        }
        if (num1 === 1) {
            return `${number}  ${textForms[0]}`;
        }
        return `${number}  ${textForms[2]}`;
    }
    return (
        <div className="box-grid-4 mt-24 px-4">
            {blogs.map((item, index) => (
                <Link key={index} href="/blogs/[slug]" as={`/blogs/${item.url}`}>
                    <a>
                        <div key={index} className="flex flex-col  box-card relative">
                            <div className="relative">
                                <img src={item.img} alt={item.title}
                                    style={{ width: '100%', height: 250 }} />
                                <h2 className="bg-gray-800 bg-opacity-40 text-xl flex justify-center items-center font-bold h-full absolute top-0 w-full text-white text-center">
                                    {item.title}
                                </h2>
                            </div>
                            {/*<div className="flex justify-start">*/}
                            {/*    {item.hash.map(item => (*/}
                            {/*        <p key={item} className="text-primary-150 font-light mr-2 mt-3 text-xs">#{item}</p>*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                            <div className="mt-4 px-4">
                                <p className="line-clamp-3">
                                    <Markup content={item.body} />
                                </p>
                            </div>
                            <div className="flex justify-end items-center mt-4 p-4">
                                {/*<div className="flex items-center">*/}
                                {/*    <img src='/avatar.png' alt='Author Avatar' width={40} height={40}/>*/}
                                {/*    <div className="flex flex-col">*/}
                                {/*        <p className="ml-4 text-sm">YaBooker</p>*/}
                                {/*        /!*<p className="ml-4 text-sm">Ivanova</p>*!/*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <p className="text-lg font-bold">{moment(item.created_date).format('DD.MM.YY')}</p>
                            </div>
                            <MiniReactions articleId={item.url} />
                        </div>

                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Card