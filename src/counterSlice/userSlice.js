import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
userList :[null],
fetchingUsers:false,
erroeMassage:null
}
// export const fetchusers=createAsyncThunk("user/fetch",
// async ()=>{
// const response=  await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await response.json()

// return data;
// })
export const fetchusers = createAsyncThunk('user/fetch', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return data
})
export const userSlice=createSlice({
name :"users",
initialState:{},
extraReducers:{
  [fetchusers.fulfilled]: (state, action) => {
      state.userList = action.payload
      state.fetchingUsers = false
    },
 [fetchusers.pending]: state => {
      state.fetchingUsers = true
    },
  [fetchusers.rejected]: state => {
      state.fetchingUsers = false
      state.erroeMassage = 'Something went wrong...'
    }
}
})
export default userSlice.reducer