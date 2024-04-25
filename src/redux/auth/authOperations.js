import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeFormData } from '../../helpers/objectOperations';
import { reqCurrent, reqLogin, reqSignOut, reqSignUp, reqUpdateUser, reqResendVerify } from '../../services/api';

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await reqSignUp(credentials);
      return res;
    } catch (e) {
      if (e.response) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const resendVerify = createAsyncThunk(
  'auth/resendVerify',
  async (credentials, thunkAPI) => {
    try {
      const res = await reqResendVerify(credentials);
      return res;
    } catch (e) {
      if (e.response) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await reqLogin(credentials);
      return res;
    } catch (e) {
      if (e.response) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = reqSignOut();
      return res;
  } catch (e) {
    if (e.response) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    } else {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
});

export const getCurrUserParams = createAsyncThunk(
  'auth/params',
  async (_, thunkAPI) => {
    try {
      const res = await reqCurrent();
      return res;
    } catch (e) {
      if (e.response) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const setCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    try {
      const formData = makeFormData(credentials);
      const res = await reqUpdateUser(formData);
      return res;
    } catch (e) {
      if (e.response) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);
