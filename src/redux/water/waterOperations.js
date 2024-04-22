import { createAsyncThunk } from "@reduxjs/toolkit";
import { reqMonthWater, reqTodayWater } from "../../services/api";

export const getTodayWater = createAsyncThunk('water/getTodayWater', async (_, thunkAPI) => {
    try {
      const water = await reqTodayWater();
      return water;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const getMonthWater = createAsyncThunk(
    'water/getMonthWater',
    async (selectDate, thunkAPI) => {
      try {
        const monthWater = await reqMonthWater(selectDate);
        return monthWater;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );