import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./WishList/WishListCard/WishListSlice";
import FleshSalesReducer from "./Home/FlashSales/FleshSalesSlice";
import ProductReducer from "./Home/ExploreProducts/ProductsToExploreSlice"
import BestProductReducer from "./Home/BestSelingProduct/BestProductSlice"
import CartReducer from "./Carts/CartsDetal/cartsSlice"
import AuthReducer from "./Login/Logindetail/AuthSlice"
import CartApi from "./RTK/CartApi";
const store = configureStore({
  reducer: {
  
    wishlist: wishlistReducer,
    fleshslice:FleshSalesReducer,
    productslice:ProductReducer,
    bestproductslice:BestProductReducer,
    cartslice:CartReducer,
      authslice: AuthReducer,
      [CartApi.reducerPath]:CartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CartApi.middleware),
});

export default store;