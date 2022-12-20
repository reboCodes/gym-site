import { useSelector, useDispatch } from "react-redux";
import { updateExercise } from "./workoutSlice";
import Set from "./Set";


export default function Exercise({ exerciseId }){

    const dispatch = useDispatch();
    const workout = useSelector( state => state.workout ); 
    
    const exercise = workout.exercies[exerciseId]

    const onChangeExercise = ( event, param, exerciseId ) => {
        dispatch(
            updateExercise({
                "param" : param,
                "value" : event.target.value,
                "exerciseId" : exerciseId
            })
        );
    }

    return(

        <div className="exercise">

            <input
                type="text"
                value={exercise.exerciseName}
                placeholder = "Exercise Name"
                className="name exercise-name"
                onChange={ event => onChangeExercise(event, "exercise_name", exerciseId)}
            />
                
            <input
                type="text"
                placeholder = "Exercise Notes"
                value={exercise.exerciseNotes}
                className="notes exercise-notes"
                onChange={ event => onChangeExercise(event, "exercise_notes", exerciseId)}
            />

            <div className="set-list">
                {exercise.sets.map( (set, i) => {
                    return(
                    <Set key={i} exerciseId={exerciseId} setId={i} />
                )})}
            </div>

        </div>

    );
}

