/** @format */

//const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userSlice.js";

const store = configureStore({
    reducer
});
export default store;
