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

            const numExercise = workout.exercies.length;
            
            if(exerciseId === numExercise-1){
                workout.exercies.push(emptyExercise);
            }
            
            for(var repeat = 2; repeat>0; repeat--){
                if(numExercise > 1){
                    for(var i=0; i<=numExercise; i++){
                        const prevExercise = JSON.stringify({...workout.exercies[i-1]});
                        const currExercise = JSON.stringify({...workout.exercies[i]});
                        const empty = JSON.stringify(emptyExercise)
                        if(prevExercise === empty && currExercise === empty){
                            workout.exercies.splice(i, 1)
                        }
                    }
                }
            }
        },

        updateSet: (workout, action) => {
            const { param, value, exerciseId, setId } = action.payload;
            workout.exercies[exerciseId].sets[setId][param] = value;

            const numSets = workout.exercies[exerciseId].sets.length;
            
            if(setId === numSets-1){
                workout.exercies[exerciseId].sets.push(emptySet);
            }
            
            for(var repeat = 2; repeat>0; repeat--){
                if(numSets > 1){
                    for(var i=0; i<=numSets; i++){
                        const prevSet = JSON.stringify({...workout.exercies[exerciseId].sets[i-1]});
                        const currSet = JSON.stringify({...workout.exercies[exerciseId].sets[i]});
                        const empty = JSON.stringify(emptySet)
                        if(prevSet === empty && currSet === empty){
                            workout.exercies[exerciseId].sets.splice(i, 1)
                        }
                    }
                }
            }
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


