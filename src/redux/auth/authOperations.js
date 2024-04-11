import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = '';

const registration = createAsyncThunk(
  'auth/register'
);

const logIn = createAsyncThunk(
  'auth/login'
);

const logOut = createAsyncThunk(
  'auth/logout'
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh'
);

const operations = {
  registration,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;