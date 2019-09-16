import React from "react";
import "../../../assects/style/discover/songSheet.css";
import {
    NavLink,
    Switch,
    Route
} from "react-router-dom";
import {
    Icon
} from "antd";
import RecommendPlayList from "./RecommendPlayList";//推荐页
import Highquality from "./Highquality";//精品页
class SongSheet extends React.Component {
    render() {
        return (
            <div className={"songSheet"}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={() => this.props.history.push("/discover")}/> <b>歌单广场</b>
                </nav>
                <nav className={"songSheetNav"}>
                    <NavLink exact activeStyle={{color: "red", fontSize: 16}} to={"/songSheet"}>推荐</NavLink>
                    <NavLink to={"/songSheet/official"} activeStyle={{color: "red", fontSize: 16}}>官方</NavLink>
                    <NavLink to={"/songSheet/highquality"} activeStyle={{color: "red", fontSize: 16}}>精品</NavLink>
                    <NavLink to={"/songSheet/chinese"} activeStyle={{color: "red", fontSize: 16}}>华语</NavLink>
                    <NavLink to={"/songSheet/pop"} activeStyle={{color: "red", fontSize: 16}}>流行</NavLink>
                </nav>
                <Switch>
                    <Route path={"/songSheet/highquality"} component={Highquality}></Route>
                    <Route path={"/songSheet"} component={RecommendPlayList}></Route>
                </Switch>
            </div>
        )
    }
}
export default SongSheet