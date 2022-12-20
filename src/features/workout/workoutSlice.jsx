import { createSlice } from "@reduxjs/toolkit";

// object definitions

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
    "exercies" : [ emptyExercise ]
}


// helper functions

const deleteEmptyExercises = (workoutState) => {
    var workout = workoutState;
    const numExercise = workout.exercies.length;
    for(var repeat = 2; repeat>0; repeat--){
        for(var i=0; i<=numExercise; i++){
            const prevExercise = JSON.stringify({...workout.exercies[i-1]});
            const currExercise = JSON.stringify({...workout.exercies[i]});
            const empty = JSON.stringify(emptyExercise)
            if(prevExercise === empty && currExercise === empty){
                workout.exercies.splice(i, 1)
            }}}
    return workout;
}

const deleteEmptySets = (workoutState, exerciseId) => {
    var workout = workoutState;
    const numSets = workout.exercies[exerciseId].sets.length;
    for(var repeat = 2; repeat>0; repeat--){
        for(var i=0; i<=numSets; i++){
            const prevSet = JSON.stringify({...workout.exercies[exerciseId].sets[i-1]});
            const currSet = JSON.stringify({...workout.exercies[exerciseId].sets[i]});
            const empty = JSON.stringify(emptySet)
            if(prevSet === empty && currSet === empty){
                workout.exercies[exerciseId].sets.splice(i, 1)
            }}}
}


// slice definition 

const workoutSlice = createSlice({
    name: "workout",
    initialState: emptyWorkout,
    reducers: {

        updateWorkout: (workout, action) => {
            const { param, value } = action.payload;
            workout[param] = value;
        },

        updateExercise: (workout, action) => {
            const { param, value, exerciseId } = action.payload;
            workout.exercies[exerciseId][param] = value;
            if(exerciseId === workout.exercies.length-1){
                workout.exercies.push(emptyExercise);
            }
            if(!value){ workout = deleteEmptyExercises(workout); }
        },

        updateSet: (workout, action) => {
            const { param, value, exerciseId, setId } = action.payload;
            workout.exercies[exerciseId].sets[setId][param] = value;
            if(setId === workout.exercies[exerciseId].sets.length-1){
                workout.exercies[exerciseId].sets.push(emptySet);
            }
            if(!value){
                workout = deleteEmptyExercises(workout);
                workout = deleteEmptySets(workout, exerciseId);
            }
        },
        
    }
});


// export actions and reducers

export const {
    updateWorkout,
    updateExercise,
    updateSet
} = workoutSlice.actions;

export default workoutSlice.reducer;

