import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice"
import ProductSliceReducer from "./ProductSlice"
import CartSliceReducer from "./CartSlice"

const Store=configureStore({
    reducer:{
        user:UserSliceReducer,
        product:ProductSliceReducer,
        cart:CartSliceReducer
    }
})

export default Store