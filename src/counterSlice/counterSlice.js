import { createSlice } from "@reduxjs/toolkit";

const initialState= {value :0}
function increment (state){
state.value+=1
}
function decrement (state){
state.value-=1
}
const CounterSlice=createSlice({
name: "counter",
initialState,
reducers:{
increment,
decrement}

})
export const {increment:incrementAction,decrement:decrementAction}=CounterSlice.actions

export default CounterSlice.reducer;
