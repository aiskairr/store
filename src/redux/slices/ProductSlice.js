import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    brands: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map((item) => item);
    },
    setBrands: (state, action) => {
      state.brands = action.payload.map((item) => item);
    },
  },
});
export const { setProducts, setBrands } = productSlice.actions;
export default productSlice.reducer;
