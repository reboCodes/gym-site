import { createSlice } from "@reduxjs/toolkit";

const emptySet = {"reps" : "", "weight" : ""}
const initialState = [emptySet]

export const setListSlice = createSlice({
    name: "setList",
    initialState,
    reducers: {

        updateSetList: (setList, action) => {
            // change a set
            const { name, value, id } = action.payload
            setList[id][name] = value;
            // add a blank set to the end of the list
            const len = setList.length;
            if(setList[id]["reps"] && setList[id]["weight"] && id === len-1){
                setList.push(emptySet)
            }
            // remove the last set in the list
            if(len > 2){
                if(!setList[len-2]["reps"] && !setList[len-2]["weight"] && !setList[len-1]["reps"] && !setList[len-1]["weight"]){
                    setList.pop()
                }
            }
        },
    }});

export const { updateSetList } = setListSlice.actions;
export default setListSlice.reducer;