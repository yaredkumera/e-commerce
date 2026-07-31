import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./WishList/WishListCard/WishListSlice";
import FleshSalesReducer from "./Home/FlashSales/FleshSalesSlice";
import ProductReducer from "./Home/ExploreProducts/ProductsToExploreSlice"
import BestProductReducer from "./Home/BestSelingProduct/BestProductSlice"
import CartReducer from "./Carts/CartsDetal/cartsSlice"
const store = configureStore({
  reducer: {
  
    wishlist: wishlistReducer,
    fleshslice:FleshSalesReducer,
    productslice:ProductReducer,
    bestproductslice:BestProductReducer,
    cartslice:CartReducer,
  },
});

export default store;