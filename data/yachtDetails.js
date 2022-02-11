import {FaBath, FaShower, FaToilet, FaWifi} from "react-icons/fa";
import {GiElectricalSocket, GiLadder, GiSurfBoard} from "react-icons/gi";
import {RiFridgeFill, RiSailboatFill} from "react-icons/ri";
import {IoBedSharp} from "react-icons/io5";


export const yachtDetails = {
    cabin: {
        title: 'Кают',
        icon_name: <IoBedSharp className="yacht-details-icon"/>,
    },
    washroom: {
        title: 'Душ',
        icon_name: <FaBath className="yacht-details-icon"/>,
    },
    toilets: {
        title: 'Туалет',
        icon_name: <FaToilet className="yacht-details-icon"/>,
    },
    socket: {
        title: 'Розетка',
        icon_name: <GiElectricalSocket className="yacht-details-icon"/>,
    },
    fridge: {
        title: 'Холодильник',
        icon_name: <RiFridgeFill className="yacht-details-icon"/>,
    },
    deck_shower: {
        title: 'Палубный душ',
        icon_name: <FaShower className="yacht-details-icon"/>,
    },
    dinghy: {
        title: 'Динги',
        icon_name: <RiSailboatFill className="yacht-details-icon"/>,
    },
    wifi: {
        title: 'Wi-Fi',
        icon_name: <FaWifi className="yacht-details-icon"/>,
    },
    // hammock: {
    //     title: 'Гамак',
    //     icon_name: <span className="text-primary-300 flex justify-center h-5">
    //         <img src="https://img.icons8.com/ios-filled/40/000000/hammock.png"/>
    //     </span>,
    // },
    board_sup: {
        title: 'Доска SUP',
        icon_name: <GiSurfBoard className="yacht-details-icon"/>,
    },
    ladder: {
        title: 'Лестница для купания',
        icon_name: <GiLadder className="yacht-details-icon"/>,
    },

}