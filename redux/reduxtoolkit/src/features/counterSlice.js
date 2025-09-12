import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value :0
}

export const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        incremenet:(state,actions)=>{
            console.log("Incremented")
            state.value +=1
        },
        decrement:(state,actions)=>{
            console.log("Decremented")
            state.value -=1
        }
    }
})

export const {incremenet , decrement} = counterSlice.actions
export default counterSlice.reducer