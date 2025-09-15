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
    const find =   state.cart.findIndex((value)=>{
       return value.id === actions.payload.id
      })

     
      if(find != -1){
        state.cart[find] = {...state.cart[find],qunatity:state.cart[find].qunatity+1} 

      }else{
        state.cart.push({...actions.payload,qunatity:1})
      }
   },
   deleteCartItem:(state,actions)=>{
      state.cart = state.cart.filter((value)=>{
        return  value.id !== actions.payload.id
      })
   }

  },
})


export const { addToCart , deleteCartItem } = cartSlice.actions

export default cartSlice.reducer