import { createSlice } from "@reduxjs/toolkit";

const ListSlice=createSlice({
    name:"list",
    initialState:[],
    reducers:{
        AddItem:(state,action,)=>{
             state.push(action.payload)
        }
    }
})

export default ListSlice.reducer
export const{AddItem}=ListSlice.actions