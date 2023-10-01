import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { missionsObject } from '../../data/missions';

// Define a type for our missionsSlice state
interface MissionsState {
  missions: missionsObject
}

// Initial state for missionsSlice reducer is going to our missions object imported at the top
const initialState: MissionsState =  {
  missions: missionsObject
}

export const missionsSlice = createSlice({
  name: 'missions',
  // missionsSlice will infer the initialState from the `initialState` argument above
  initialState,
  reducers: {
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    // Action to start missions and log time they were initiated
    startMission: (state, action: PayloadAction<{ missionKey }>) => {
        const { missionKey } = action.payload;
        // Use provided mission key to grab the specific mission we want
        const missionToStart = state.missions[missionKey];
        // Validate the mission key exists
        if (state.missions.hasOwnProperty(missionKey)) {
            // Start mission if startTime value is null
            if (missionToStart.startTime === null) {
                missionToStart.startTime = Date.now();
            // Clear startTime if mission startTime is not null
            } else {
                missionToStart.startTime = null;
            }
        }
    },
    // Action to increment the missions level by 1 when a mission is completed
    incrementMission: (state, action: PayloadAction<{ missionKey }>) => {
        const { missionKey } = action.payload;
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
export const { incrementMission, startMission, resetMissions } = missionsSlice.actions;
// export method for useAppSelector to pull the data in the slice
export const selectMissions = (state: RootState) => state.missions.missions;
// export method to grab started missions
export const selectStartedMission = (state: RootState) => {
    const missions = state.missions.missions;
    const startedMissions = {};

    for (const missionName in missions) {
        if (missions[missionName].startTime !== null) {
            startedMissions[missionName] = missions[missionName]
        }
    }
    return startedMissions;
};
// export the missions reducer itself
export default missionsSlice.reducer;