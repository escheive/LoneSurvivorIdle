import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { craftingProjects } from '../../data/crafting';

// Define a type for our craftingSlice state
interface CraftingState {
  crafting: craftingProjects
}

const initialState: CraftingState =  {
  crafting: craftingProjects
}

export const craftingSlice = createSlice({
  name: 'crafting',
  // craftingSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementCraftingProject: (state, action: PayloadAction<{ craftingProjectKey: string, value: number }>) => {
      const { craftingProjectKey, value } = action.payload;
      if (state.crafting.hasOwnProperty(craftingProjectKey)) {
        state.crafting[craftingProjectKey].totalCrafted += value
      }
    },
    resetCrafting: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { incrementCraftingProject, resetCrafting } = craftingSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectCrafting = (state: RootState) => state.crafting.crafting;
// export the currency reducer itself
export default craftingSlice.reducer;