import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk('user/fetch', async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
})
const initialState ={
userList :[],
fetchingUsers:false,
erroeMassage:null
}
 const userSlice=createSlice({
name :"users",
initialState ,
extraReducers:{
  [fetchUsers.fulfilled]: (state, action) => {
      state.userList = action.payload
      state.fetchingUsers = false
    },

 [fetchUsers.pending]: state => {
      state.fetchingUsers = true
    },
  [fetchUsers.rejected]: state => {
      state.fetchingUsers = false
      state.erroeMassage = 'Something went wrong...'
    }
}
})
export default userSlice.reducer