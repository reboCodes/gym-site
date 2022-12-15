import { useState } from "react";
import Set from "./Set";

export default function SetList(){

    const emptySet = {"reps" : "", "weight" : ""}
    const [setList, setSetList] = useState([emptySet]);

    // function to update the setList when a set is changed
    const updateSetItem = (event, i) =>{
        const {name, value} = event.target
        const newSetList = [...setList]
        newSetList[i][name] = value
        // add a new set emtpy set to the setList when the last set is used
        if(setList[i]["reps"] && setList[i]["weight"] && setList.length === i+1){
            setSetList([...newSetList, emptySet])
        } else{
            setSetList(newSetList)
        }
    }

    return(
        <div className="set-list">
            {setList.map( (set, i) => {
                return(
                <Set
                    key={i}
                    reps={ set["reps"] }
                    weight={ set["weight"] }
                    setValues={ event => updateSetItem(event, i) }
                    />
            )})}
        </div>
    );
}

