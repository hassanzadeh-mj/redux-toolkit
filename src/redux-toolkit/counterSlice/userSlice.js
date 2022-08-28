import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";


export const fetchUsers = createAsyncThunk('user/fetch', async () => {
 const data = await api.Activities.poste()
  // const data = await response.json()
  
  return data
})
const initialState ={
userList :[],
loader:true,
fetchingUsers:true,
erroeMassage:null
}
 const userSlice=createSlice({
name :"users",
initialState ,
extraReducers:{
  [fetchUsers.fulfilled]: (state, action) => {
      state.userList = action.payload
      state.fetchingUsers = true
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