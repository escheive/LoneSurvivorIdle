import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { salvageUpgrades } from '../../data/salvageUpgrades';

// Define a type for our salvageSlice state
interface SalvageState {
  salvage: salvageUpgrades
}

const initialState: SalvageState =  {
  salvage: salvageUpgrades
}

export const salvageSlice = createSlice({
  name: 'salvage',
  // salvageSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementSalvageUpgrade: (state, action: PayloadAction<{ upgradeId: number }>) => {
      const { upgradeId } = action.payload;
      if (state.salvage[upgradeId].id === upgradeId && state.salvage[upgradeId].level < state.salvage[upgradeId].maxLevel) {
        state.salvage[upgradeId].level += 1
      }
    },
    resetSalvage: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { incrementSalvageUpgrade, resetSalvage } = salvageSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectSalvage = (state: RootState) => state.salvage.salvage;
// export the currency reducer itself
export default salvageSlice.reducer;