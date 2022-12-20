import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWorkout } from "../../features/workout/workoutSlice";
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
            <div className="workout-details">

                <input
                    type="text"
                    value={workout.workoutName}
                    placeholder = "Workout Name"
                    onChange={ event => onChangeWorkout(event, "workout_name")}
                />

                <input 
                    type = "date"
                    value={ workout.workoutDate }
                    onChange={ event => onChangeWorkout(event, "workout_date")}
                />

                <input
                    type="text"
                    value={workout.workoutNotes}
                    placeholder = "Workout Notes"
                    onChange={ event => onChangeWorkout(event, "workout_notes")}
                />

            </div>


            <div className="exercise-list">
                <Exercise exerciseId={0} />
            </div>


        </div>

    );
} 


