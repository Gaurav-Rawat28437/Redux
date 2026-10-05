import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const UsergetDataThunk=createAsyncThunk("get-user-data",async()=>{
   
    
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json()
   
    return data
    
    
})


const UserSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        data:[],
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(UsergetDataThunk.pending,(state,action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(UsergetDataThunk.fulfilled,(state,action)=>{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        }).addCase(UsergetDataThunk.rejected,(state,action)=>{
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })
    }
})

export default UserSlice.reducer