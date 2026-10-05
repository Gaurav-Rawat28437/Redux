import buycake from './cakeAction'


const initialCakeState={numberOfCake:20}

function cakeReducer(state=initialCakeState,action=buycake)
{
    switch(action.type)
    {
        case "BUY_CAKE" : {
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

        case "RESTOCK_CAKE" : return{
                                    numOfCake:state.numOfCake + action.payload
                            }

        default : return state
                            
    }
}

export default cakeReducer