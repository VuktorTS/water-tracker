import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  reqMonthWater,
  reqTodayWater,
  addWaterAmount,
  deleteWaterAmount,
  editWaterAmount,
} from '../../services/api';

export const getTodayWater = createAsyncThunk(
  'water/getTodayWater',
  async (_, thunkAPI) => {
    try {
      const water = await reqTodayWater();
      return water;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const addWater = createAsyncThunk(
  'water/add',
  async (formData, thunkAPI) => {
    try {
      const result = await addWaterAmount(formData);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/edit',
  async (formData, thunkAPI) => {
    try {
      const result = await editWaterAmount(formData);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (_id, thunkAPI) => {
    try {
      const result = await deleteWaterAmount(_id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
