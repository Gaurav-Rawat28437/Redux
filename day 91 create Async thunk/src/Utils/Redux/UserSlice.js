import {createSlice} from "@reduxjs/toolkit"
import {createAsyncThunk} from "@reduxjs/toolkit"

export const getUserData=createAsyncThunk("getData",async()=>{

    const [user,harry,product]=await Promise.all([
        fetch("https://dummyjson.com/users").then((res)=>res.json()).catch((err)=>"something is wrong"),
        fetch("https://hp-api.onrender.com/api/characters").then((res)=>res.json()).catch((err)=>"something is wrong"),
        fetch("https://dummyjson.com/products").then((res)=>res.json()).catch((err)=>"something is wrong")
    ])

    

    return {
        user:user.users,
        harry,
        product:product.products
    }

    // const res= await fetch("https://dummyjson.com/users")
    // const data=await res.json()
    // return data.users
})

const userSlice=createSlice({
    name:"User",
    initialState:{
        loading:false,
        data:{},
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        
        builder
        .addCase(getUserData.pending,(state,action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        })
        .addCase(getUserData.rejected,(state,action)=>{
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })
    }
})


export default userSlice.reducer
 