const { createStore, applyMiddleware } = require("redux")
const { thunk } = require("redux-thunk")

const API="https://dummyjson.com/users"
const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE"


function fetchUserRequest()
{
    return {type:FETCH_USERS_REQUEST}
}

function fetchUserSuccess(data)
{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:data
    }
}

function fetchUserFailure(err)
{
    return {
        type:FETCH_USERS_FAILURE,
        payload:err
    }
}

function fetchUser(dispatch)
{
        dispatch(fetchUserRequest())
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(fetchUserSuccess(data))
        })
        .catch((err)=>{
            dispatch(fetchUserFailure(err))
        })
    
}

const initialState={
    loading:false,
    data:[],
    error:null
}

function reducer(state=initialState,action)
{
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}

const store=createStore(reducer,applyMiddleware(thunk))

console.log("this is initial state:",store.getState())

const unsubscribe=store.subscribe(()=>console.log("this is state:",store.getState()))

store.dispatch(fetchUser)