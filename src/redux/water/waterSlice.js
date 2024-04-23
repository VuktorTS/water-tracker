import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addWater,
  deleteWater,
  editWater,
  getMonthWater,
  getTodayWater,
} from './waterOperations';

const initialState = {
  month: [],
  today: [],
  percentage: 0,
  isLoading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTodayWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log('getToday', payload);
        state.today = payload.waterEntries;
      })
      .addCase(getMonthWater.fulfilled, (state, { payload }) => {
        console.log('getMonth', payload);
        state.isLoading = false;
        state.error = null;
        state.month = payload;
      })
      .addCase(addWater.fulfilled, (state, { payload }) => {
        console.log('addWater payload', payload);
        state.today = payload.waterEntries;
        state.percentage = payload.percentage;
        state.isLoading = false;
      })
      .addCase(editWater.fulfilled, (state, { payload }) => {
        console.log('editWater payload', payload);
        state.today = payload.waterEntries;
        state.percentage = payload.percentage;
        state.isLoading = false;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        state.today = payload.waterEntries;
        state.percentage = payload.percentage;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getTodayWater.pending,
          addWater.pending,
          editWater.pending,
          editWater.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getTodayWater.rejected,
          addWater.rejected,
          editWater.rejected,
          editWater.rejected
        ),
        (state, action) => {
          console.log(state, action);
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});
export const waterReducer = waterSlice.reducer;
