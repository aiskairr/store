import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("BasketList") !== null
    ? JSON.parse(localStorage.getItem("BasketList"))
    : [];

const basketSlice = createSlice({
  name: "product",
  initialState: {
    basketProducts: items,
  },
  reducers: {
    getProducts: (state, action) => {
      if (state.basketProducts.find((item) => item.id == action.payload.id)) {
        alert("такой товар уже есть в корзине");
      } else {
        state.basketProducts.push(action.payload);
      }
      localStorage.setItem(
        "BasketList",
        JSON.stringify(state.basketProducts.map((item) => item))
      );
    },
    deleteProduct: (state, action) => {
      state.basketProducts = state.basketProducts.filter(
        (item) => item.id !== action.payload
      );
    },
    getCount: (state, action) => {
      state.basketProducts = state.basketProducts.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, amount: action.payload.amount };
        } else {
          return item;
        }
      });
    },
  },
});
export const { getProducts, deleteProduct, getCount } = basketSlice.actions;
export default basketSlice.reducer;
