import {configureStore} from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import formReducer from '../features/formSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        form:formReducer
    }
})