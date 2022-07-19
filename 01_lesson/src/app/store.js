import {confifureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter'



export const store = confifureStore(
    {
        reducer:{
            counter: counterReducer
        }
    }
)