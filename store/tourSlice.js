import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE_TOUR = {
    title: undefined,
    start_point: undefined,
    price: undefined,
    start_date: undefined,
    finish_date: undefined
};


export const tourSlice = createSlice({
    name: 'tour',
    initialState: INITIAL_STATE_TOUR,
    reducers: {
        add_tour: (state, action) => {
            const {title, start_point, price, start_date, finish_date} = action.payload
            state.title = title
            state.start_point = start_point
            state.price = price
            state.start_date = start_date
            state.finish_date = finish_date
        },
        remove_tour: (state, action) => {
            state.title = undefined
            state.start_point = undefined
            state.price = undefined
            state.start_date = undefined
            state.finish_date = undefined
        }
    }
})

export const { add_tour, remove_tour} = tourSlice.actions

export default tourSlice.reducer