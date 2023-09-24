import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { generatorsObject, crystalsObject } from '../../data/generators';

// Define a type for our generatorsSlice state
interface GeneratorsState {
  generators: generatorsObject
}

const initialState: GeneratorsState =  {
  generators: generatorsObject
}

export const generatorsSlice = createSlice({
  name: 'generators',
  // generatorsSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
//     incrementGenerators: (state, action: PayloadAction<{ currentTickState: object, prestigeMultiplier: number, currentCrystals: object }>) => {
//       const { currentTickState, prestigeMultiplier, currentCrystals } = action.payload;
//       const generatorKeys = Object.keys(state.generators)
//       for(let i=0; i < generatorKeys.length; i++) {
//         const currentGeneratorKey = generatorKeys[i]
//         const previousGeneratorKey = generatorKeys[i - 1];
//         const currentGenerator = state.generators[currentGeneratorKey];
//         const previousGenerator = state.generators[previousGeneratorKey];
//
//         if (currentGenerator.totalCount > 0) {
//             previousGenerator.totalCount += Math.floor( currentTickState.ticksPerTick * currentGenerator.totalCount * prestigeMultiplier * (0.5 ** currentCrystals.greenCrystal.totalCount))
//         }
//       }
//     },
    incrementGenerator: (state, action: PayloadAction<{ generatorKey: string, value: number }>) => {
      const { generatorKey, value } = action.payload;
      if (state.generators.hasOwnProperty(generatorKey)) {
        state.generators[generatorKey].totalQuantity += value
      }
    },
    buyGenerator: (state, action: PayloadAction<{ generatorKey: string, value: number }>) => {
      const { generatorKey, value } = action.payload;
      console.log(generatorKey, value)
      if (state.generators.hasOwnProperty(generatorKey)) {
        state.generators[generatorKey].purchasedQuantity += value
        state.generators[generatorKey].totalQuantity += value
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