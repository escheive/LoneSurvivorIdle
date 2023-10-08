import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Defining types for each currency in our currencySlice state
interface CurrencyState {
  scraps: number,
  salvagedTech: number
}

// Initial state for the currencySlice
const initialState: CurrencyState = {
  scraps: 1,
  salvagedTech: 0
}

// Reducer for tracking various currencies in the game
export const currencySlice = createSlice({
  name: 'currency',
  // currencySlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementCurrency: (state, action: PayloadAction<{ currencyType: string, value: number }>) => {
      const { currencyType, value } = action.payload;
      if (state.hasOwnProperty(currencyType)) {
        state[currencyType] += value
      }
    },
    resetCurrency: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { incrementCurrency, resetCurrency } = currencySlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectCurrency = (state: RootState) => state.currency;
// export the currency reducer itself
export default currencySlice.reducer;