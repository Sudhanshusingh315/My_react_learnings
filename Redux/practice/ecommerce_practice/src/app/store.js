import { configureStore } from "@reduxjs/toolkit";
import prodcutReducer from "../features/Product/productSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    products: prodcutReducer,
    items: cartReducer,
  },
});
