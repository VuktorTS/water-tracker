import { createSelector } from '@reduxjs/toolkit';

export const selectWater = (state) => state.water;

export const selectTodayWater = createSelector(
  selectWater,
  (water) => water.today
);

export const selectMonthWater = createSelector(
  selectWater,
  (water) => water.month
);

export const selectCurrentConsumption = createSelector(
  selectWater,
  (water) => water.currentConsumption
);

export const selectDailyWaterNorm = createSelector(
  selectWater,
  (water) => water.dailyWaterNorm
);

export const selectWaterIsLoading = createSelector(
  selectWater,
  (water) => water.isLoading
);
export const selectWaterPercentage = createSelector(
  selectWater,
  (water) => water.percentage
);
