import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart:(state,actions)=>{
    console.log(actions.payload);
    state.cart.push(actions.payload)
   }
  },
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer