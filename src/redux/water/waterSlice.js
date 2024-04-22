import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addWater,
  deleteWater,
  editWater,
  getMonthWater,
  getTodayWater,
} from './waterOperations';
import {
  editWaterEntry,
  findConsuption,
} from '../../helpers/waterStateFunctions';

const initialState = {
  month: [],
  today: [],
  dailyDrank: 0,
  waterNorma: 0,
  // today: [{ time: null, waterVolume: null, _id: null }],
  currentConsumption: 0,
  dailyWaterNorm: 0,
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
      .addCase(getMonthWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.month = payload;
      })
      .addCase(addWater.fulfilled, (state, { payload }) => {
        state.today.push(payload);
        state.currentConsumption += payload.waterVolume;
        state.isLoading = false;
      })
      .addCase(editWater.fulfilled, (state, { payload }) => {
        editWaterEntry(state.today, payload);
        state.currentConsumption = findConsuption(state.today);
        state.isLoading = false;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        console.log('deleteWater payload', payload);
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
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});
export const waterReducer = waterSlice.reducer;
