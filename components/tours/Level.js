import {FaDotCircle} from "react-icons/fa";

export default function TourLevel({ level }) {
    let color
    switch (level) {
        case 1:
            color = "text-green-600"
            break
        case 2:
            color = "text-yellow-600"
            break
        case 3:
            color = "text-yellow-600"
            break
        case 4:
            color = "text-red-600"
            break
    }
    let dots = Array.from(Array(level).keys())
    let dotsGray = Array.from(Array(4 - level).keys())
    return (
        <>
            {dots.map(index => (
                <FaDotCircle key={index} className={`mr-1 w-4 h-4 ${color}`}/>
            ))}
            {dotsGray.map(index =>(
                <FaDotCircle key={index} className='mr-1 w-4 h-4 text-gray-400'/>
            ))}
        </>
    )
}