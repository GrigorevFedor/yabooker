import {FaHeadSideMask, FaHouseUser, FaPlaneSlash} from "react-icons/fa";


export const covidInfo = {
    PCR: {
        icon_name: <FaHeadSideMask />,
        color: 'covid-100'
    },
    Quarantine: {
        icon_name: <FaHouseUser />,
        color: 'covid-200'
    },
    Prohibition: {
        icon_name: <FaPlaneSlash />,
        color: 'red-600'
    },
}