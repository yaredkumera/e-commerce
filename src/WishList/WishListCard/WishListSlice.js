import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [
  {
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    rating: 5,
    id:13,
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
    id:14,
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
    id:15,
     quantity:1,
  },
  {
    name: "Small BookShelf",
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
    image: "/BestSell4.png",
    id:16,
     quantity:1,
  }]
  
  },
  reducers: {
    addTowishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromwishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTowishlist, removeFromwishlist } = cartSlice.actions;
export default cartSlice.reducer;
