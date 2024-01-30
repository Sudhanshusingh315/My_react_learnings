import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/CartSlice";
export const store = configureStore({
  reducer: {
    product: counterReducer,
    cart: cartReducer,
  },
});
