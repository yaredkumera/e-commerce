import {createSlice} from "@reduxjs/toolkit"
const BestProductSlice=createSlice({
    name:"bestproductslice",
    initialState:{
        items:
[
  {
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    rating: 5,
  id:9,
    reviews: 65,
    image: "/BestSell1.png",
    quantity:1,
  },
  {
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 65,
    id:10,
    image: "/BestSell2.png",
    quantity:1,
  },
  {
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 4,
    reviews: 65,
    image: "/BestSell3.png",
    id:11,
    quantity:1,
  },
  {
    name: "Small BookShelf",
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
    image: "/BestSell4.png",
   id:12,
   quantity:1,
  },
  {
    name: "Small BookShelf",
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
    image: "/BestSell4.png",
   id:26,
   quantity:1,
  },
  {
    name: "Small BookShelf",
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
    image: "/BestSell4.png",
   id:27,
   quantity:1,
  },
]},
reducers:{

}})

export default BestProductSlice.reducer;