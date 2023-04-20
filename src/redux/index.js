import { configureStore } from "@reduxjs/toolkit";
import product from "./slices/ProductSlice";
import basket from "./slices/BasketSlice";
import counter from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    product,
    basket,
    counter,
  },
});
