import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE_BASKET = {
    id: 0,
    qty: 1,
};


export const basketSlice = createSlice({
    name: 'basket',
    initialState: INITIAL_STATE_BASKET,
    reducers: {
        add_item: (state, action) => {
            const { id , qty} = action.payload
            if (state.id !== id){
                state.id = id
                state.qty = 1
            }
            if (state.qty > qty){
                state.qty = 1
            }
        },
        add_qty: (state, action) => {
            state.qty += 1
        },
        sub_qty: (state, action) => {
            if (state.qty !== 1) {
                state.qty -= 1
            }
        },
        delete_qty: (state, action) => {
            state.qty = 1
        },
    }
})

export const { add_item, add_qty, sub_qty, delete_qty } = basketSlice.actions

export default basketSlice.reducer