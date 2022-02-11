export default function Captain({ avatar, last_name, first_name }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center mx-auto">
                <img
                    className="object-cover w-20 h-20 rounded-full shadow-lg ring ring-gray-300 ring-opacity-50"
                    src={avatar === null ? '/avatar.png': avatar}
                    width={80}
                    height={80}
                    alt="Person"
                />
                <div className="flex flex-col justify-center mt-8 text-center">
                    <p className="text-lg font-bold">{first_name} {last_name}</p>
                    <p className="text-gray-500">Организатор</p>
                </div>
            </div>
        </>
    )
}