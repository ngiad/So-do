import { createSlice } from "@reduxjs/toolkit"

export const Item = createSlice({
    name : "Item",
    initialState : {
        data : [],
        page : 0,
        search : "",
    },
    reducers:{
        update : (state,action) => {
            return state = action.payload
        }
    }
})

export const { update } = Item.actions

export default Item.reducer