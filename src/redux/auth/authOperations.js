import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeFormData } from '../../helpers/objectOperations';
axios.defaults.baseURL = 'https://project-node-wt-team4.onrender.com/api';

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const dataForReg = {
      email: credentials.email,
      password: credentials.password,
    };
    try {
      const res = await axios.post('/users/signup', dataForReg);
      return res.data;
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
      const res = await axios.post('/users/signin', credentials);
      setAuthHeader(res.data.token);
      return res.data;
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
    const res = await axios.post('/users/signout');
    if (res) {
      clearAuthHeader();
      return res.data;
    }
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
      const res = await axios.get('users/current');
      return res.data;
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
      const res = await axios.patch('users/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (e) {
      if (e.response) {
        return thunkAPI.rejectWithValue(e.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);
