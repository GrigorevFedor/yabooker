export const TagsItem = ({title}) => {
    return (
        <a href='' className="inline-block text-center bg-yellow-400 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2
            transition duration-500 ease-in-out transform hover:scale-105">
            {title}
        </a>
    )
}


export default function Tags() {
    return (
        <>
            <div className="flex flex-wrap w-full px-6 items-center justify-center">
                <TagsItem title='#photography'/>
                <TagsItem title='#travel'/>
                <TagsItem title='#winter'/>
                <TagsItem title='#photography'/>
            </div>
        </>
    )
}
