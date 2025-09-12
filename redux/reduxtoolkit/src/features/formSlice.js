import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData:[]
}


export const formSlice = createSlice({
    name:"Form",
    initialState,
    reducers:{
        saveFormInfo:(state,actions)=>{
            console.log("Form Values 🎈")
            console.log(actions.payload)
            state.userData.push(actions.payload)
        }
    }
})

export const {saveFormInfo} = formSlice.actions
export default formSlice.reducer