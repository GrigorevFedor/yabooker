export default function Heading({title, id}) {
    return (
        <>
            <div className="w-full text-left px-4">
                <h2 id={id}
                    className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                    {title}
                </h2>
                <span className="mt-2 mb-2 block w-3/12 h-1 transition-transform origin-left rounded-full transform-gpu group-hover:scale-x-100 bg-primary-900"/>
            </div>
        </>
    )
}