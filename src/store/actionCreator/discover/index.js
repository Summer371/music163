import {CHANGE_RECOMMEND_SONGS_LIST} from "../../actionType/personalized";
import {CHANGE_NEW_SONGS_LIST} from "../../actionType/personalized";
import {CHANGE_BANNER} from "../../actionType/banner";
import {
    CHANGE_TOP_ALBUM
} from "../../actionType/top";
import axios from "axios";
function recommendSongsList(payload) {
    return{
        type:CHANGE_RECOMMEND_SONGS_LIST,
        payload
    }
}
function topAlbumList(payload) {
    return{
        type:CHANGE_TOP_ALBUM,
        payload
    }
}
function bannerList(payload) {
    return{
        type:CHANGE_BANNER,
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
    getBannerList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/banner?type=2");
            dispatch(bannerList(data.banners))
        }
    },
    getNewAlbumList(limit){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/album?limit="+limit);
            dispatch(topAlbumList(data.albums))
        }
    }
}