import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Defining types for each currency in our playerDataSlice state
interface PlayerDataState {
  lastOnlineTimestamp: number | null,
}

// Initial state for the playerDataSlice
const initialState: PlayerDataState = {
  lastOnlineTimestamp: null;
}

// Reducer for tracking various playerData
export const playerDataSlice = createSlice({
  name: 'player data',
  // playerDataSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setLastOnlineTimestamp: (state) => {
        state.lastOnlineTimestamp = Date.now();
    },
    resetPlayerData: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { setLastPlayedTimestamp, resetPlayerData } = playerDataSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectPlayerData = (state: RootState) => state.playerData;
// export the playerData reducer itself
export default playerDataSlice.reducer;