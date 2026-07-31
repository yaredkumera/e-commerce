import {createSlice} from "@reduxjs/toolkit"
const FleshSalesSlice=createSlice({
    name:"fleshslice",
    initialState:{
        items:[
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: "/FlashSales1.png",
    id:17,
    quantity:1,
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
    quantity:1,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
    image: "/FlashSales3.png",
    id:19,
    quantity:1,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
    image: "/FlashSales4.png",
    id:20,
    quantity:1,
  },
],
reducers:{

}
    }
})
export default FleshSalesSlice.reducer 