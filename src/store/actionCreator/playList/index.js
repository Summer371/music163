import {CHANGE_PALYLIST} from "../../actionType/playList";
import axios from "axios";
//获取catlist
function playList(payload) {
    return{
        type:CHANGE_PALYLIST,
        payload
    }
}

export default {
    getplayList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/playlist/catlist");
            dispatch(playList(data))
        }

    }
}