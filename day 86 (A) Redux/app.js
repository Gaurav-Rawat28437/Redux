const { createStore, combineReducers, applyMiddleware } = require("redux")

//redux-logger it is not part of redux it is part of middleware
const { createLogger } = require("redux-logger");
const logger = createLogger();

const BUY_CAKE="BUY-CAKE"
const RESTOCK_CAKE="RESTOCK_CAKE"


//this is action
function buyCake(quantity)
{
    return{
        type : BUY_CAKE,
        payload : quantity || 1
    }
}

//this is action
function restockCake(quantity)
{
    return {
        type : RESTOCK_CAKE,
        payload : quantity
    }
}

//this is state
const initialCakeState = {
    numOfCake : 20
}

//this is reducer
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

//create store
// const store=createStore(cakeReducer)

//this is dispatch
// store.dispatch(buyCake())

//this is use to get information about cakestate
// console.log(store.getState())

//if you dont want to print getState multiple time and you want the information about state when any action happen
// you can use store inbuilt method calles subscribe.;it take callback funtion
// const unsubscribe=store.subscribe(()=>{console.log("total cake left:",store.getState())}) 

// store.dispatch(buyCake())
// store.dispatch(buyCake(10))



//-------------------now we create multiple Reducer and multiple action---------------------------
//----------------------combineReducers------------------


const BUY_ICECREAM="BUY-ICECREAM"
const RESTOCK_ICECREAM="RESTOCK_ICECREAM"



function buyIceCream(quantity)
{
    return{
        type : BUY_ICECREAM,
        payload : quantity || 1
    }
}


function restockIceCream(quantity)
{
    return {
        type : RESTOCK_ICECREAM,
        payload : quantity
    }
}


const initialIceCreamState = {
    numOfIceCream : 20
}


function IceCreamReducer(state=initialIceCreamState,action)
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


const rootReducer=combineReducers({
    cakeReducer,IceCreamReducer
})


// const store=createStore(rootReducer)

//this is how we use middleware and redux-logger,Middleware can show previous & next state
const store=createStore(rootReducer,applyMiddleware(logger))


// const unsubscribe=store.subscribe(()=>{console.log("store condition:",store.getState())}) 

store.dispatch(buyCake(20))
// store.dispatch(buyIceCream(20))
// store.dispatch(restockCake(50))
// store.dispatch(restockIceCream(30))

