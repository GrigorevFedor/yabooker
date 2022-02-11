import {FiChevronDown} from "react-icons/fi";
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="flex flex-wrap h-3/4 justify-center content-center box-content">
                <div className="lg:w-7/12 px-4 text-center text-white">
                    <h1 className="text-5xl sm:text-7xl font-extrabold">
                        Сервис по подбору яхтенных путешествий
                    </h1>
                    <h2 className="mt-6 text-xl font-bold">
                        Ваше приключение начинается здесь!
                    </h2>
                </div>
            </div>
            <div className="flex flex-col h-1/4 items-center justify-center text-white -mt-8">
                <p className="text-xl">
                    Посмотреть туры
                </p>
                <Link href="#tours">
                    <a className="animate-bounce text-4xl text-center font-bold hover:text-yellow-400 mt-6">
                        <FiChevronDown/>
                    </a>
                </Link>
            </div>
        </>
    )
}