import { useSelector, useDispatch } from "react-redux";
import { updateSetList } from "./setListSlice";
import Set from "./Set";


export default function SetList(){

    const setList = useSelector( state => state.setList)
    const dispatch = useDispatch();

    return(
        <div className="set-list">
            {setList.map( (set, i) => {
                return(
                <Set
                    key={i}
                    reps={ set["reps"] }
                    weight={ set["weight"] }
                    setValues={ event => dispatch(updateSetList({
                        "name" : event.target.name,
                        "value" : event.target.value,
                        "id" : i
                    }))} />
            )})}
        </div>
    );
}

