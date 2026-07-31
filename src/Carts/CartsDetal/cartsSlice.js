import {createSlice} from "@reduxjs/toolkit"
const CartSlice=createSlice({
    name:"cartslice",
    initialState:{
        items:[  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: "/FlashSales1.png",
    id:17,
     quantity: 1,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
    image: "/FlashSales2.png",
    id:18,
     quantity: 1,
  },]
    },
    reducers:{
addToCart: (state, action) => {
     state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateCart:(state, action) => {
        const data=state.items.find(e=>e.id===action.payload.id)
        const updated={...data,...action.payload}
        
      state.items = state.items.map(e=>e.id===action.payload.id?updated:e)
    },
    }})
export const{addToCart,removeFromCart,updateCart} =CartSlice.actions;
export default CartSlice.reducer;