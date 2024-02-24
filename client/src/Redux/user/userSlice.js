import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    error:null,
    loading:false
}
export const userSlice = createSlice({
  name:"user",
  "initialState":initialState,
  reducers:{
    signInStart:(state)=>{
        state.loading=true;
        state.error=null;
    },
    signInSuccess:(state,action)=>{
        state.currentUser=action.payload;
        state.loading=false;
        state.error=null;

    },
    signInFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        },
  }
});

// Action creators are generated for each case reducer function
export const{signInStart,signInSuccess,signInFail}=userSlice.actions
// Selector functions are created for the slice reducer
export default userSlice.reducer;