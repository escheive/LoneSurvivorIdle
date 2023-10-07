import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { generatorsArray, crystalsObject } from '../../data/generators';

// Define a type for our generatorsSlice state
interface GeneratorsState {
  generators: generatorsArray
}

const initialState: GeneratorsState =  {
  generators: generatorsArray
}

export const generatorsSlice = createSlice({
  name: 'generators',
  // generatorsSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementGenerator: (state, action: PayloadAction<{ generatorId: number, value: number }>) => {
      const { generatorId, value } = action.payload;
      if (state.generators[generatorId].id === generatorId) {
        state.generators[generatorId].totalQuantity += value
      }
    },
    buyGenerator: (state, action: PayloadAction<{ generatorId: string, value: number }>) => {
      const { generatorId, value } = action.payload;
      if (state.generators[generatorId].id === generatorId) {
        state.generators[generatorId].purchasedQuantity += value
        state.generators[generatorId].totalQuantity += value
      }
    },
    resetGenerators: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { incrementGenerator, buyGenerator, resetGenerators } = generatorsSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectGenerators = (state: RootState) => state.generators.generators;
// export the currency reducer itself
export default generatorsSlice.reducer;