import {CHANGE_RECOMMEND_SONGS_LIST} from "../../actionType/personalized";
import {CHANGE_NEW_SONGS_LIST} from "../../actionType/personalized";
import axios from "axios";
function recommendSongsList(payload) {
    return{
        type:CHANGE_RECOMMEND_SONGS_LIST,
            payload
    }
}
function newSongs(payload) {
    return{
        type:CHANGE_NEW_SONGS_LIST,
        payload
    }
}

export default {
    recommendSongsList(){
        return async(dispatch)=>{
            const {data}=await axios.get("/personalized?limit=9")
            dispatch(recommendSongsList(data.result))
        }
    },
    newSongs(){
        return async(dispatch)=>{
            const {data}=await axios.get("/personalized/newsong")
            dispatch(newSongs(data.result))
        }
    },
}