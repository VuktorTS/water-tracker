import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  getCurrUserParams,
  setCurrentUser,
} from './authOperations';
import { assignValues } from '../../helpers/objectOperations';

const initialState = {
  user: {},
  specialMess: '',
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const forPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const forRejected = (state, action) => {
  console.log('action: ', action);
  state.isLoading = false;
  state.error = action.payload;
  if (state.error === 'invalid signature') {
    state.token = null;
    state.isLoggedIn = false;
    state.user = {};
    state.specialMess = '';
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, forPending)
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.specialMess = '';
      })
      .addCase(registration.rejected, forRejected)
      .addCase(logIn.pending, forPending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.specialMess = '';
      })
      .addCase(logIn.rejected, forRejected)
      .addCase(logOut.pending, forPending)
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = {};
        state.specialMess = payload.message;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, forRejected)
      .addCase(getCurrUserParams.pending, forPending)
      .addCase(getCurrUserParams.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.specialMess = '';
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrUserParams.rejected, forRejected)
      .addCase(setCurrentUser.pending, forPending)
      .addCase(setCurrentUser.fulfilled, (state, { payload }) => {
        assignValues(payload, state.user);
        state.specialMess = '';
        state.isLoading = false;
        state.error = null;
      })
      .addCase(setCurrentUser.rejected, forRejected);
  },
});
export default authSlice.reducer;
