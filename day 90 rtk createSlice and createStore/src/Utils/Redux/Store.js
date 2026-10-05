import {configureStore} from "@reduxjs/toolkit"
import AddItemReducer from "../Redux/listSlice"

const Store=configureStore({
    reducer:{
        Item:AddItemReducer
    }
})

export default Store