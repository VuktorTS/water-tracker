
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchMonthWater = async ({ year, month }) => {
    const { data } = await axios.post(`/water/month`, { year, month });
    return data;
  };


export const fetchMonthWaterThunk = createAsyncThunk(
    'water/fetchMonthWater',
    async (body, { rejectWithValue }) => {
      try {
        const data = await fetchMonthWater(body);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );
  