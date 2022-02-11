import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE_FILTER_TOURS = {
    filters: {
        countries: [],
        price: [],
        startDate: (new Date().valueOf()),
        endDate: undefined,
    }
    
    
};

export const filterToursSlice = createSlice({
    name: 'filterTours',
    initialState: INITIAL_STATE_FILTER_TOURS,
    reducers: {
        add_filter_tours: (state, action) => {
            const {countries, price, startDate, endDate} = action.payload
            if(countries) state.filters = {...state.filters, countries: countries}
            if(price) state.filters = {...state.filters, price: price}
            if(startDate) state.filters = {...state.filters, startDate: startDate}
            if(endDate) state.filters = {...state.filters, endDate: endDate}
        },
        remove_filter_tours: (state, action) => {
            return INITIAL_STATE_FILTER_TOURS
        }
    }
})

export const { add_filter_tours, remove_filter_tours } = filterToursSlice.actions

export default filterToursSlice.reducer