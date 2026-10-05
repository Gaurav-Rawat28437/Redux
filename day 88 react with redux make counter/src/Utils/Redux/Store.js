import { createStore, compose } from "redux"
import cakeReducer from "./Cake/cakeReducer"
import { combineReducers } from "redux"
import { IceCreamReducer } from "./IceCream/IceCreamReducer"


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer=combineReducers({cakeReducer,IceCreamReducer})
export const store = createStore(rootReducer, composeEnhancers())