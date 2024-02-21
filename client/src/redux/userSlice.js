/** @format */

//const { createSlice } = require("@reduxjs/toolkit");
import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("_P"))
    ? JSON.parse(localStorage.getItem("_P"))
    : [],
};
const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    add: (state, action) => {
      const data = { id: nanoid(), item: action.payload, quantity: 1 };

      const index = state.cart.findIndex((i) => i.item._id == data.item._id);
      if (index >= 0) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push(data);
      }
      const items = JSON.stringify(current(state.cart));
      localStorage.setItem("_P", items);
      // console.log("payload", action.payload);
      //  console.log("state", current(state.cart));
    },
    decrease: (state, action) => {
      const index = state.cart.findIndex((i) => i.item._id == action.payload);
      if (index >= 0) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        }
      }
      const items = JSON.stringify(current(state.cart));
      localStorage.setItem("_P", items);
    },
    increase: (state, action) => {
      const index = state.cart.findIndex((i) => i.item._id == action.payload);
      if (index >= 0) {
        if (state.cart[index].quantity > 0) {
          state.cart[index].quantity++;
        }
      }
      const items = JSON.stringify(current(state.cart));
      localStorage.setItem("_P", items);
    },

    remove: (state, action) => {
      const data = state.cart.filter((i, idx) => idx !== action.payload);

      state.cart = data;
      const items = JSON.stringify(state.cart);
      localStorage.setItem("_P", items);
    },
    // eslint-disable-next-line no-unused-vars
    removeAll: (state, action) => {
      state.cart = [];
      localStorage.removeItem("_P");
    },
  },
});
export const { add, remove, removeAll, decrease, increase } = cartSlice.actions;
export default cartSlice.reducer;
