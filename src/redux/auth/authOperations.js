import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://project-node-wt-team4.onrender.com/api';

Notify.init({
  cssAnimationStyle: 'zoom',
  cssAnimationDuration: 550,
  failure: {
    background: '#9ebbff',
    textColor: '#fff',
    notiflixIconColor: 'rgba(255, 0, 0, 0.2)',
  },
});

const setAuthHeader = token => {
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
      password: credentials.password
    }
    try {
      const res = await axios.post('/users/signup', dataForReg);
      return res.data
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
      return res.data
    } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async(_, thunkAPI) => {
    try {
      const res = await axios.post('/users/signout');
      if (res) {
        clearAuthHeader();
        return res.data
      }
  } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
  }
);

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
      const res = await axios.patch('users/', credentials);
      return res.data
    } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
  }
);

const updateWaterRate = async waterRate => {
  const { data } = await axios.patch('/users/rate', { waterRate });
  return data;
};

export const updateWaterRateThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (newWaterRate, { rejectWithValue }) => {
    try {
      const rate = Number(newWaterRate) * 1000;
      await updateWaterRate(rate);
      return rate;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.failure(`WaterRate" must be greater than or equal to 0`);
      }
      return rejectWithValue(error.message);
    }
  },
);