import { useSelector, useDispatch } from "react-redux";
import { updateExercise, updateSets } from "../slices/exerciseSlice";
import Set from "./Set";


export default function Exercise(){

    const exercise = useSelector( state => state.exercise );
    console.log(exercise);
    const dispatch = useDispatch();

    return(
        <div className="exercise">

            <input
                name="weight"
                value={exercise.exerciseName}
                onChange={ event => dispatch(updateExercise({
                    "exerciseName" : event.target.value
                })) }
                placeholder="Exercise" />

            <div className="set-list">
                {exercise.sets.map( (set, i) => {
                    return(
                    <Set
                        key = {i}
                        reps = { set["reps"] }
                        weight = { set["weight"] }
                        setValues = { event => dispatch(updateSets({
                            "memberName" : event.target.name,
                            "memberValue" : event.target.value,
                            "setId" : i
                        }))} />
                )})}
            </div>
        </div>
    );
}

