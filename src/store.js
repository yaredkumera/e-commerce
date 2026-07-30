import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./WishList/WishListCard/WishListSlice";

const store = configureStore({
  reducer: {
   
    wishlist: wishlistReducer,
    
  },
});

export default store;