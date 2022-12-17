import { createSlice } from "@reduxjs/toolkit";


const emptySet = {
    "reps" : "",
    "weight" : ""
}

const exerciseObject = {
    "exerciseName" : "",
    "sets" : [emptySet]
}

const initialState = exerciseObject;

export const exerciseSlice = createSlice({
    name: "exercise",
    initialState,
    reducers: {

        updateSets: (exercise, action) => {
            // change a set
            const { memberName, memberValue, setId } = action.payload
            exercise.sets[setId][memberName] = memberValue;
            // add a blank set to the end of the list
            const len = exercise.sets.length;
            if(exercise.sets[setId]["reps"] && exercise.sets[setId]["weight"] && setId === len-1){
                exercise.sets.push(emptySet)
            }
            // remove the last set in the list
            if(len > 1){
                if(!exercise.sets[len-2]["reps"] && !exercise.sets[len-2]["weight"] && !exercise.sets[len-1]["reps"] && !exercise.sets[len-1]["weight"]){
                    exercise.sets.pop()
                }
            }
        },

        updateExercise: (exercise, action) => {
            const { exerciseName } = action.payload;
            exercise.exerciseName = exerciseName;
        }

    }});

export const { updateSets, updateExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;