import {CHANGE_EVERYDAY_SONG_LIST} from "../../actionType/recommend";
import axios from "axios";
export function everydaySongsList(payload) {
    return{
        type:CHANGE_EVERYDAY_SONG_LIST,
        payload
    }
}
export default {
    everydaySongsList(){
       return async (dispatch)=>{
           const {data}=await axios.get("/recommend/songs")
           dispatch(everydaySongsList(data.result))
        }
    }
}