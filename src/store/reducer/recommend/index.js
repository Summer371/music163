import initState from "../../state/recommend";
import {CHANGE_EVERYDAY_SONG_LIST} from "../../actionType/recommend";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_EVERYDAY_SONG_LIST){
        state.recommend=payload
    }
    return state
}