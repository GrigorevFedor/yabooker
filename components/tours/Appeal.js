import Image from 'next/image'

export default function TourAppeal({number, title, description}) {
    return (
        <>
            <div className="flex flex-col w-full rounded-lg overflow-hidden shadow-lg bg-white p-8">
                <p className="mt-2 text-xl font-bold">{title}</p>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </>
    )
}