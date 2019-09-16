import {CHANGE_BANNER,CHANGE_DJ_BANNER} from "../../actionType/banner";
import axios from "axios";
function bannerList(payload) {
    return{
        type:CHANGE_BANNER,
        payload
    }
}
export default {
    getBannerLists(){
        return async (dispatch)=>{
            const {banner} = await axios.get("/banner?type=2");
            dispatch(bannerList(banner))
        }
    }
}
