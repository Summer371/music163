import React from "react";
import { Carousel,Icon } from 'antd';
import "../../assects/style/home/discover.css";
import {connect} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    NavLink ,
    Route
} from "react-router-dom";
import TopAlbum from "../../components/topAlbum";
import NewSong from "../../components/newSong";
import discoverInfo from "../../store/actionCreator/discover";
 class Discover extends React.Component{
    render(){
        const {songsList,banner,newSong,topAlbum} =this.props;
        return(
            <div className={"discover"}>
                <div className={"banner"}>
                    <Carousel autoplay>
                        {
                            banner.map((v,i)=>{
                                return(
                                    <div key={i}>
                                        <img src={v.pic} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <nav className={"discoverNav"}>
                    <div>
                        <Icon type="apple" />
                        <p>每日推荐</p>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/songSheet")
                    }}>
                        <Icon type="apple" />
                        <p>歌单</p>
                    </div>
                    <div>
                        <Icon type="apple" />
                        <p>排行榜</p>
                    </div>
                    <div>
                        <Icon type="apple" />
                        <p>电台</p>
                    </div>
                </nav>
                <div className={"recommendSongs"}>
                    <h4>推荐歌单</h4>
                    <ul>
                        {
                            songsList.map(v=>{
                                return(
                                    <li key={v.id}>
                                        <span><Icon type="caret-right"/>{v.playCount}</span>
                                        <img  src={v.picUrl} alt=""/>
                                        <p>{v.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={"topAlbum"}>
                    <h4><NavLink to={{
                        pathname:"/discover/topAlbum",
                        stage:{
                            topAlbum
                        }
                    }}>新碟</NavLink> | <NavLink to={{
                        pathname:"/discover/newSong",
                        stage:{
                            newSong
                        }
                    }}>新歌</NavLink></h4>
                    <Route path={"/discover/topAlbum"} component={TopAlbum}></Route>
                    <Route path={"/discover/newSong"} component={NewSong}></Route>
                </div>
                <div className={"topCouldCountry"}>
                    <nav className={"couldNav"}><p>云村精选</p> <span><Icon type="loading" />获取新内容</span></nav>
                    <ul>
                        <li>
                            <span>之组人yultron</span>
                            <img src="" alt=""/>
                            <p>运输的</p>
                        </li>
                    </ul>
                </div>
                <div className={"listen"}>
                    <h3>听听</h3>
                    <img src="" alt=""/>
                    <p>何其幸运遇到你</p>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.recommendSongsList();
        this.props.newSongs();
        this.props.getBannerList();
        this.props.getNewAlbumList(3);
    }
}
function mapStateToProps(state) {
    return{
        songsList:state.personalized.songsList,//推荐歌单
        newSong:state.personalized.newSong,//推荐新歌
        banner:state.banner.banner,//轮播
        topAlbum:state.top.topAlbum,//新碟
    }
}
function mapDispatchToProps(dispatch) {
   return  bindActionCreators(discoverInfo,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Discover)