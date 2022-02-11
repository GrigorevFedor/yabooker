import { FaStar, FaSortAmountDownAlt, FaSortAmountDown } from "react-icons/fa";
import { useState } from "react";

export default function ReviewsBlock({ comments, middle_star }) {
    if (comments.length === 0) {
        return (<></>)
    }

    const [sortType, setSortType] = useState(false);
    const [sortedComments, setsortedComments] = useState([...comments]);

    const sortComments = () => {
        sortedComments.sort((a, b) => {
            return !sortType ? a.rating - b.rating : b.rating - a.rating
        })
    }

    const sortHandler = () => {
        setSortType(!sortType)
        sortComments()
    }

    return (
        <>
            <div
                className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5 mb-8">
                <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">Отзывы</h2>
                <span
                    className="mt-2 mb-12 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900" />
                <div className="flex flex-wrap justify-between">
                    <div className="lg:w-1/2 items-center justify-between content-center w-full">
                        {sortType && <FaSortAmountDownAlt onClick={sortHandler} />}
                        {!sortType && <FaSortAmountDown onClick={sortHandler} />}
                        {comments.length > 0 &&
                            <ReviewItem key={sortedComments[0].id} name={sortedComments[0].name} body={sortedComments[0].body}
                                rating={sortedComments[0].rating} />}
                        {comments.length > 1 &&
                            <ReviewItem key={sortedComments[1].id} name={sortedComments[1].name} body={sortedComments[1].body}
                                rating={sortedComments[1].rating} />}
                    </div>
                    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                        <div className="flex mb-8 justify-end w-full items-center text-right">
                            <div className="rounded-lg p-6 w-1/3">
                                <span className="block font-extrabold text-3xl">{comments.length}</span>
                                <span className="block">отзывов</span>
                            </div>
                            <div className="flex bg-gray-100 rounded-lg py-6 justify-center items-center w-1/2">
                                <FaStar className="text-primary-900 text-4xl" />
                                <div className="text-center w-1/2">
                                    <span className="block font-extrabold text-3xl">{middle_star.toFixed(1)}</span>
                                    <span className="block">рейтинг</span>
                                </div>
                            </div>
                        </div>
                        <StarsRating count={5} comments={comments} />
                    </div>
                </div>
            </div>
        </>
    )
}

const StarsRating = ({ count, comments }) => {
    const starsSum = comments.length

    const countStars = reviews => {
        const map = new Map()
        for (const review of reviews) {
            map.set(review.rating, map.has(review.rating) ? map.get(review.rating) + 1 : 1)
        }
        return map
    }
    const countOfStars = countStars(comments)

    function getWidth(countOfStar, invert = false) {
        if (countOfStar) {
            return Math.round(((countOfStar / starsSum) * 100))
        } else {
            return 0
        }

        // return cutFraction(Math.round(countOfStar / starsSum), 12, invert)
    }

    function cutFraction(m, n, invert) {
        let M = m
        let N = n
        for (let i = 2; i <= m; i++) {
            if (m % i === 0 && n % i === 0)
                M = m / i, N = n / i;
        }
        return (`${invert ? N - M : M}/${N}`);
    }

    let content = [];

    for (let i = count; i >= 1; i--) {
        content.push(<div key={i} className="flex content-center mb-2 justify-end items-center">
            <Stars key={i} count={i} fullfiled={countOfStars.has(i) ? i : 0} />
            <div className="w-1/2 bg-gray-200 h-2 rounded-lg">
                <div className='bg-primary-900 rounded-lg h-2' style={{ width: `${getWidth(countOfStars.get(i))}%` }} />
            </div>
        </div>);
    }

    return (
        <div className="lg:ml-8">
            {content}
        </div>
    )
}

export const Stars = ({ count, fullfiled = 0 }) => {
    let content = [];
    for (let i = 0; i < count; i++) {
        fullfiled--
        content.push(<FaStar key={i} className={`${fullfiled >= 0 ? 'text-primary-900 mr-2' : 'text-gray-200 mr-2'} `}
        />);
    }
    return (
        <div className="flex w-1/2 justify-end lg:px-8 px-4">
            {content}
        </div>
    )
}

const ReviewItem = ({ name, body, rating }) => {
    return (
        <>
            <div className="rounded-lg box-card-info mb-4">
                <div className="flex items-center">
                    <img className="object-cover w-12 h-12 rounded-full shadow border-2"
                        src='/avatar.png'
                        width={80}
                        height={80}
                        alt="Person"
                    />
                    <div className="flex items-center justify-between w-full">
                        <h2 className="ml-4 font-bold">{name}</h2>
                        <Stars count={5} fullfiled={rating} />
                    </div>

                </div>
                <p className="m-4">{body}</p>
            </div>
        </>
    )
}