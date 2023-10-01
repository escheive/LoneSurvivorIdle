import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { missions } from '../../data/missions';

// Define a type for our missionsSlice state
interface MissionsState {
  missions: missions
}

// Initial state for missionsSlice reducer is going to our missions object imported at the top
const initialState: MissionsState =  {
  missions: missions
}

export const missionsSlice = createSlice({
  name: 'missions',
  // missionsSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    // Action to increment the missions level by 1 when a mission is completed
    incrementMission: (state, action: PayloadAction<{ missionKey }>) => {
      // Validate the mission before changing state then incrementing level by 1
      if (state.missions.hasOwnProperty(missionKey)) {
        state.missions[missionKey].level += 1
      }
    },
    // Action to reset missionsSlice
    resetMissions: () => {
      return initialState;
    },
  }
})

// Export various actions for the slice
export const { incrementMission, resetMissions } = missionsSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectMissions = (state: RootState) => state.missions.missions;
// export the missions reducer itself
export default missionsSlice.reducer;