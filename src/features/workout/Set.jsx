import { useSelector, useDispatch } from "react-redux";
import { updateSet } from "./workoutSlice";


export default function Set( {exerciseId, setId} ) {

    const dispatch = useDispatch();
    const workout = useSelector( state => state.workout ); 
    
    const set = workout.exercies[exerciseId].sets[setId]

    const difficultyOptions = [];
    difficultyOptions.push(<option key={0} value="">Difficulty</option>)
    for (let i = 1; i <= 5; i++) {
        difficultyOptions.push(<option key={i} value={i}>{i}</option>);
    }

    const onChangeSet = ( event, param, exerciseId, setId) => {
        dispatch(
            updateSet({
                "param" : param,
                "value" : event.target.value,
                "exerciseId" : exerciseId,
                "setId" : setId
            })
        );
    }

    return(
        <div className="set">

            <input
                type="text"
                value={set.reps}
                placeholder="Reps"
                className="num-input reps"
                onChange={ event => onChangeSet(event, "reps", exerciseId, setId)}
            />

            <input
                type="text"
                value={set.weight}
                placeholder="Weight"
                className="num-input weight"
                onChange={ event => onChangeSet(event, "weight", exerciseId, setId)}
            />

            <input
                type="text"
                value={set.setNotes}
                placeholder="Set Notes"
                className="notes set-notes"
                onChange={ event => onChangeSet(event, "set_notes", exerciseId, setId)}
            />

            <select
                value={set.setDifficulty}
                defaultValue="Difficulty"
                className="difficulty"
                onChange={ event => onChangeSet(event, "set_difficulty", exerciseId, setId)}
            >
                {difficultyOptions}
            </select>

        </div>
    );
}

