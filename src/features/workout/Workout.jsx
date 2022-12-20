import { useSelector, useDispatch } from "react-redux";
import { updateWorkout } from "./workoutSlice";
import Exercise from "./Exercise"


export default function Workout(){
    
    const dispatch = useDispatch();
    const workout = useSelector( state => state.workout );

    // TODO: set a default value for the date
    // const today = new Date()
    // const todayString= today.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

    const onChangeWorkout = ( event, param ) => {
        dispatch(
            updateWorkout({
                "param" : param,
                "value" : event.target.value
            })
        );
    }

    return(
        <div className="workout">

            <input
                type="text"
                value={workout.workoutName}
                placeholder = "Workout Name"
                className="name workout-name"
                onChange={ event => onChangeWorkout(event, "workout_name")}
            />

            <input 
                type = "date"
                value={ workout.workoutDate }
                className="date workout-date"
                onChange={ event => onChangeWorkout(event, "workout_date")}
            />

            <input
                type="text"
                value={workout.workoutNotes}
                placeholder = "Workout Notes"
                className="notes workout-notes"
                onChange={ event => onChangeWorkout(event, "workout_notes")}
            />

            <div className="exercise-list">
                {workout.exercies.map( (exercises, i) => {
                    return(
                    <Exercise key={i} exerciseId={i} />
                )})}
                <p> </p>
            </div>

        </div>

    );
} 


