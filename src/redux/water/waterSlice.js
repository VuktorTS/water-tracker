import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMonthWater, getTodayWater } from './waterOperations';

const initialState = {
  month: [],
  today: [],
  dailyDrank: 0,
  waterNorma: 0,
  isLoading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTodayWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.today = payload.waterEntries;
      })
      .addCase(getMonthWater.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.month = payload;
      })
      .addMatcher(isAnyOf(getTodayWater.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getTodayWater.rejected), (state, action) => {
        state.isLoading = false;
      });
  },
});

export const waterReducer = waterSlice.reducer;
