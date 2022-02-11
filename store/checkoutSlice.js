import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE_CHECKOUT = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
};


export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: INITIAL_STATE_CHECKOUT,
    reducers: {
        add_checkout: (state, action) => {
            const {firstName, lastName, email, tel} = action.payload
            state.firstName = firstName
            state.lastName = lastName
            state.email = email
            state.tel = tel
        },
        remove_checkout: (state, action) => {
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.tel = ''
        }
    }
})

export const { add_checkout, remove_checkout } = checkoutSlice.actions

export default checkoutSlice.reducer