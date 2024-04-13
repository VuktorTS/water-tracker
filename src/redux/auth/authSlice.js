// import { createSlice } from '@reduxjs/toolkit';
// import{registration} from "./authOperations"

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   isAuthLoading: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder.addCase(registration.fulfilled, (state, { payload }) => {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//       state.isAuthLoading = false;
//     });
//   },
// });
// export default authSlice.reducer;