import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  cart: [],
  TotalPrice:0,
  TotalQuantity:0
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
   },
   IncrementQuantity:(state,actions)=>{
          state.cart = state.cart.map((value)=>{
            if(value.id === actions.payload.id){
                return {...value, qunatity:value.qunatity+1}
            }
            return value
          })
   },
   DecrementQuantity:(state,actions)=>{
    state.cart = state.cart.map((value)=>{
      if(value.id===actions.payload.id){
        return { ...value , qunatity:value.qunatity > 1 ? value.qunatity-1 :1}

      }
      return value
    })
   },
   cartTotal:(state)=>{
      const {totalPrice,totalQuantity} =  state.cart.reduce((cartTotal,cartItems)=>{
          const {price , qunatity} = cartItems
          const itemTotal = parseFloat(price) * qunatity
          cartTotal.totalPrice += itemTotal
          cartTotal.totalQuantity += qunatity
          return cartTotal
        },{
          totalPrice:0,
          totalQuantity:0
        })

        state.TotalPrice = totalPrice
        state.TotalQuantity = totalQuantity
   }

  },
})


export const { addToCart , deleteCartItem , IncrementQuantity , DecrementQuantity , cartTotal } = cartSlice.actions

export default cartSlice.reducer