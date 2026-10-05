import {configureStore} from "@reduxjs/toolkit"
import userSliceReducer from  "../Redux/UserSlice"


const Store=configureStore({
    reducer:{
        UserData:userSliceReducer
    }
})

export default Store