
export default function Set(props) {

    return(
        <div className="set">
            <input
                name="reps"
                value={props.reps}
                onChange={props.setValues}
                placeholder="Reps" />

            <input
                name="weight"
                value={props.weight}
                onChange={props.setValues}
                placeholder="Weight" />
        </div>
    );
}

