export default function CheckoutPerson({first_name, last_name, email, tel}) {

    return (
        <>
            <div className="container py-4 mx-auto">
                <div className="bg-white flex flex-wrap md:ml-auto w-full md:mt-0 relative">
                    <div className="relative mb-4 w-full">
                        <p className="leading-7 text-gray-400">Имя</p>
                        <p className="text-lg">{first_name}</p>
                    </div>
                    <div className="relative mb-4 w-full">
                        <p className="leading-7 text-gray-400">Фамилия</p>
                        <p className="text-lg">{last_name}</p>
                    </div>
                    <div className="relative mb-4 w-full">
                        <p className="leading-7 text-gray-400">Электронная почта</p>
                        <p className="text-lg">{email}</p>
                    </div>
                    <div className="relative mb-4 w-full">
                        <p className="leading-7 text-gray-400">Телефон</p>
                        <p className="text-lg">{tel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}