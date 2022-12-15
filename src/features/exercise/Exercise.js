import { useState } from "react";
import SetList from "../set/SetList.js";


export default function Exercise(){

    const [exercise, setExercise] = useState("")

    const handleExerciseChange = event => {
        setExercise(event.target.value)
    }

    return(
        <div className="exercise">
            <input
                name = "exercise"
                value = {exercise}
                onChange={handleExerciseChange}
                placeholder="Exercise"
                />
            <SetList />
        </div>
    );
}

