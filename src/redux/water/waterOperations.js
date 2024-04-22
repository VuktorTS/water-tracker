import { createAsyncThunk } from '@reduxjs/toolkit';
import { addWaterAmount, editWaterAmount } from '../../services/api';

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
