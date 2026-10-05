import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


export const PrductgetDataThunk=createAsyncThunk("get-product-data",async()=>{

    const res=await fetch("https://dummyjson.com/products")
    const data=await res.json()
   
    return data.products
})

const ProductSlice=createSlice({
    name:"product",
    initialState:{
         loading:false,
        data:[],
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
            builder
            .addCase(PrductgetDataThunk.pending,(state,action)=>{
                return {
                    ...state,
                    loading:true
                }
            })
            .addCase(PrductgetDataThunk.fulfilled,(state,action)=>{
                return {
                    ...state,
                    loading:false,
                    data:action.payload
                }
            }).addCase(PrductgetDataThunk.rejected,(state,action)=>{
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
            })
        }
})

export default ProductSlice.reducer