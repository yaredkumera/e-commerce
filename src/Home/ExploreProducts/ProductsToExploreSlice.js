import {createSlice} from "@reduxjs/toolkit"
const ProductSlice=createSlice({
    name:"productslice",
    initialState:{
        items:[
{
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 4,
    reviews: 35,
    isNew: false,
    colors: [],
    image: "Product1.png",
    id:1,
    quantity:1,
  },
  {
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    isNew: false,
    colors: [],
    image: "Product2.png",
    id:2,
    quantity:1,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    isNew: false,
    colors: [],
    image: "Product3.png",
    id:3,
    quantity:1,
  },
  {
    name: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    isNew: false,
    colors: [],
    image: "Product6.png",
    id:4,
    quantity:1,
  },
  {
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["#DB4444", "#DB4444"],
    image: "Product5.png",
    quantity:1,
   id:5
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    isNew: false,
    colors: ["#FFEB3B", "#DB4444"],
    image: "Product6.png",
    quantity:1,
   id:6
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4,
    reviews: 55,
    isNew: true,
    colors: ["#000000", "#DB4444"],
    image: "Product7.png",
    quantity:1,
   id:7
  },
  {
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4,
    reviews: 55,
    isNew: false,
    colors: ["#4B5563", "#DB4444"],
    image: "Product8.png",
    quantity:1,
    id:8
  },
],
reducers:{

}
    }
})
export default ProductSlice.reducer 
