import {CHANGE_PALYLIST} from "../../../actionType/playList";
import {CHANGE_TOP_PALYLIST} from "../../../actionType/top";
import axios from "axios";
function playList(payload) {
    return{
        type:CHANGE_PALYLIST,
        payload
    }
}
function topPlayList(payload) {
    return{
        type:CHANGE_TOP_PALYLIST,
        payload
    }
}

export default {
    getplayList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/playlist/catlist");
            dispatch(playList(data))
        }
    },
    getTopPlayLists(){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/playlist");
            dispatch(topPlayList(data.playlists))
        }
    }
}
