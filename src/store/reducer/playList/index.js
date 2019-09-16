import {CHANGE_PALYLIST} from "../../actionType/playList";
import initState from "../../state/playList";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_PALYLIST){
        state.catList=payload;
    }
    return state;
}