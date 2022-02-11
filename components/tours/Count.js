import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {add_item, add_qty, sub_qty} from "../../store/basketSlice";

const Count = ({qty}) => {
    const countState = useSelector((state) => state.basket.qty)
    const dispatch = useDispatch()



    const handleIncrement = () => {
        if (countState <= (qty - 1)) {
            dispatch(add_qty())
        }
    }

    const handleDecrement = () => {
        if (countState >= 2) {
            dispatch(sub_qty())
        }
    }

    const inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
    }

    function getName(qty) {
        if (qty === 1 || qty === null || qty === undefined) {
            return "место"
        }
        if (qty >= 2 && qty <= 4) {
            return "места"
        }
        if (qty >= 5 && qty <= 20) {
            return "мест"
        }
    }

    function getColor(qty) {
        if (qty >= 1 && qty <= 2) {
            return <p className={`text-red-700 font-bold`}>{qty} {getName(qty)}</p>
        }
        if (qty >= 3 && qty <= 5) {
            return <p className={`text-yellow-700 font-bold`}>{qty} {getName(qty)}</p>
        }
        if (qty >= 6) {
            return <p className={`text-green-700 font-bold`}>{qty} {getName(qty)}</p>
        }
    }



    return (
        <div>
            {qty === 0 || qty === null || qty === undefined ? '' :
                <div className="w-full flex flex-wrap justify-center mt-4">
                    <p className="mr-2">Осталось: </p>
                    {getColor(qty)}
                </div>
            }
            {qty === 0 || qty === null || qty === undefined ?
                <div
                    className="flex items-center justify-center h-10 w-full rounded-lg relative border-2 border-gray-200 mt-4">
                    <p className="font-bold text-red-500">Нет мест</p>
                </div>
                :
                <div
                    className="flex flex-row h-10 w-full rounded-lg relative border-2 border-gray-200 mt-4">
                    <button data-action="decrement" onClick={handleDecrement} type="button"
                            className="text-gray-600 hover:text-gray-700 hover:bg-yellow-200 h-full w-20 rounded-l cursor-pointer outline-none border-r">
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" id="count"
                            className="outline-none focus:outline-none text-center w-full font-bold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                            name="custom-input-number" value={`${countState}`}
                            onChange={(event) => inputChangedHandler(event)}/>
                    <button data-action="increment" onClick={handleIncrement} type="button"
                            className="text-gray-600 hover:text-gray-700 hover:bg-yellow-200 h-full w-20 rounded-r border-l cursor-pointer">
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>}

        </div>
    )
}

export default Count