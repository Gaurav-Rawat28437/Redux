import { BUY_CAKE } from "./cakeAction"
import { RESTOCK_CAKE } from "./cakeAction"

const initialCakeState={numOfCake:20}

function cakeReducer(state=initialCakeState,action)
{
    switch(action.type)
    {
        case BUY_CAKE : {
                            if(action.payload<=state.numOfCake)
                            {
                                return {
                                    numOfCake : state.numOfCake - action.payload
                                }
                            }
                            else{
                                return {
                                    numOfCake : state.numOfCake - 1
                                }
                            }
                        }

        case RESTOCK_CAKE : return{
                                    numOfCake:state.numOfCake + action.payload
                            }

        default : return state
                            
    }
}

export default cakeReducer