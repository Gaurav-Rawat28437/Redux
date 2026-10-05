import {createStore} from '@reduxjs/toolkit'
import cakeReducer from './cake/cakeReducer'

export const store=createStore(cakeReducer)

