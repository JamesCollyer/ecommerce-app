import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    reducers: {
      loginStart: (state) => {
        state.isFetching = true;
      },
      loginSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      },
      loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      logout: (state) => {
        state.isFetching = false;
        state.currentUser = null;
      },
      addUserStart: (state) => {
        state.isFetching = true
        state.error = false
      },
      addUserSuccess: (state, action) => {
          state.isFetching = false
          state.error = false
          state.user.push(action.payload)
      },
      addUserFailure: (state) => {
          state.isFetching = false
          state.error = true
      },
    },
  });
  
  export const { 
    loginStart,
    loginSuccess,
    loginFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure,
    logout
  } = userSlice.actions;
  export default userSlice.reducer;