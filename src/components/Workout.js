import { useState } from "react";
import Exercise from "./Exercise";
import Set from "./Set";

export default function Workout(){

    const [exerciseList, setExerciseList] = useState([{}]);




    // I need to create a dynamic list of exercises
    //
    // maybe I could make a workout slice that holds the list of exercies




    return(
        <div className="exercise">

            <div>
                <Exercise />
            </div>

        </div>

    );
} 


