import { useSelector, useDispatch } from "react-redux";
import { updateSet } from "../../features/workout/workoutSlice";



export default function Set( {exerciseId, setId} ) {

    const dispatch = useDispatch();
    const workout = useSelector( state => state.workout ); 
    
    const set = workout.exercies[exerciseId].sets[setId]

    console.log(set)

    const difficultyOptions = [];
    difficultyOptions.push(<option key={0} disabled>Difficulty</option>)
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
                onChange={ event => onChangeSet(event, "reps", exerciseId, setId)}
            />

            <input
                type="text"
                value={set.weight}
                placeholder="Weight"
                onChange={ event => onChangeSet(event, "weight", exerciseId, setId)}
            />

            <input
                type="text"
                value={set.setNotes}
                placeholder="Notes"
                onChange={ event => onChangeSet(event, "set_notes", exerciseId, setId)}
            />

            <select
                value={set.setDifficulty}
                defaultValue="Difficulty"
                onChange={ event => onChangeSet(event, "set_difficulty", exerciseId, setId)}
            >
                {difficultyOptions}
            </select>

        </div>
    );
}

