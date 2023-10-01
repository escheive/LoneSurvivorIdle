import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

// Defining types for each currency in our playerDataSlice state
interface PlayerDataState {
  lastOnlineTimestamp: number | null,
}

// Initial state for the playerDataSlice
const initialState: PlayerDataState = {
  lastOnlineTimestamp: null,
}

// Reducer for tracking various playerData
export const playerDataSlice = createSlice({
  name: 'playerData',
  // playerDataSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setLastOnlineTimestamp: (state, action: PayloadAction<{ currentTime }>) => {
        const { currentTime } = action.payload;
        state.lastOnlineTimestamp = currentTime;
    },
    resetPlayerData: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { setLastOnlineTimestamp, resetPlayerData } = playerDataSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectPlayerData = (state: RootState) => state.playerData;
// export the playerData reducer itself
export default playerDataSlice.reducer;