import { createSlice } from "@reduxjs/toolkit";


const emptySet = {
    "reps" : "",
    "weight" : "",
    "set_difficulty" : "",
    "set_notes" : ""
}

const emptyExercise = {
    "exercise_name" : "",
    "exercise_notes" : "",
    "sets" : [emptySet]
}

const emptyWorkout = {
    "workout_name" : "",
    "workout_date" : "",
    "workout_notes" : "",
    "exercies" : [{
        "exercise_name" : "",
        "exercise_notes" : "",
        "sets" : [{
            "reps" : "",
            "weight" : "",
            "set_difficulty" : "",
            "set_notes" : ""
        }]
    }]
}

const initialState = emptyWorkout;

const workoutSlice = createSlice({
    name: "workout",
    initialState,
    reducers: {

        updateWorkout: (workout, action) => {
            const { param, value } = action.payload;
            workout[param] = value;
        },

        updateExercise: (workout, action) => {
            const { param, value, exerciseId } = action.payload;
            workout.exercies[exerciseId][param] = value;
        },

        updateSet: (workout, action) => {
            const { param, value, exerciseId, setId } = action.payload;
            workout.exercies[exerciseId].sets[setId][param] = value;
            const numSets = workout.exercies[exerciseId].sets.length;

            if(setId === numSets-1){
                workout.exercies[exerciseId].sets.push(emptySet)
            }


            console.log("numSets: " + numSets)
            console.log("setId: " + setId)
        },

        updateSetList: (workout, action) => {

        },

        getEmptySet: () => {
            return emptySet;
        },

        getEmptyExercise: () => {
            return emptyExercise;
        },
        
    }
});


export const {
    updateWorkout,
    updateExercise,
    updateSet,
    getEmptySet,
    getEmptyExercise
} = workoutSlice.actions;

export default workoutSlice.reducer;

