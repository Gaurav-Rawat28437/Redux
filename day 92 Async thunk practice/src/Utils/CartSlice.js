import {createSlice} from "@reduxjs/toolkit"

const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const newItemId=action.payload.id

            const foundItem=state.find((item)=>{
                return item.id==newItemId
            })

            if(!foundItem)
            {
                return [...state,{...action.payload,quantity:1}]
            }
            else{
                
                foundItem.quantity=foundItem.quantity+1
            }
        },
        removeToCart:(state,action)=>{
            const newItemId=action.payload.id

            const foundItem=state.find((item)=>{
                return item.id==newItemId
            })
            if(foundItem.quantity<=1)
            {
                return state.filter((item)=>{
                    return item.id!=foundItem.id
                })
            }
            else{
                
                foundItem.quantity=foundItem.quantity-1
            }
        }

    }
})

export default CartSlice.reducer
export const {addToCart,removeToCart}=CartSlice.actions