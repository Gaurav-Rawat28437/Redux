import { BUY_ICECREAM,RESTOCK_ICECREAM } from "./IceCreamAction"

const initialIceCreamState = {
    numOfIceCream : 40
}


export function IceCreamReducer(state=initialIceCreamState,action)
{
    switch(action.type)
    {
        case BUY_ICECREAM : {
                            if(action.payload<=state.numOfIceCream)
                            {
                                return {
                                    numOfIceCream : state.numOfIceCream - action.payload
                                }
                            }
                            else{
                                return {
                                    numOfIceCream : state.numOfIceCream - 1
                                }
                            }
                        }

        case RESTOCK_ICECREAM : return{
                                    numOfIceCream : state.numOfIceCream + action.payload
                            }

        default : return state
                            
    }
}