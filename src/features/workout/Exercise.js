import { useSelector, useDispatch } from "react-redux";
import { updateExercise } from "../../features/workout/workoutSlice";
import Set from "./Set";
// import Set from "../app/features/workoutList/Set";


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
                onChange={ event => onChangeExercise(event, "exercise_name", exerciseId)}
            />
                
            <input
                type="text"
                placeholder = "Exercise Notes"
                value={exercise.exerciseNotes}
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

