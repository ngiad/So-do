import { createSlice } from "@reduxjs/toolkit"

export const Item = createSlice({
    name : "Item",
    initialState : {
        data : [],
        page : 1
    },
    reducers:{
        update : (state,action) => {
            return state = action.payload
        }
    }
})

export const { update } = Item.actions

export default Item.reducer