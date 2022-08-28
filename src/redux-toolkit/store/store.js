import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
import userReducer from "../counterSlice/userSlice"
const Store =configureStore({
reducer:{
counter : counterReducer,
users : userReducer}
})
export default Store;