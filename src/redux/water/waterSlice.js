import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addWater, editWater } from './waterOperations';
import {
  editWaterEntry,
  findConsuption,
} from '../../helpers/waterStateFunctions';

const initialState = {
  month: [],
  today: [],
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
      .addMatcher(
        isAnyOf(addWater.rejected, editWater.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(addWater.pending, editWater.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});
export const waterReducer = waterSlice.reducer;
