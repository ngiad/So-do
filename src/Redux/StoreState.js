import { configureStore } from "@reduxjs/toolkit"
import  Item  from "./Slice"


export default configureStore({
    reducer : {
        Item : Item
    }
})