import React from "react";
import { Icon } from 'antd';
import {
    Route,
    Switch,
    NavLink
} from "react-router-dom";
import Discover from "./discover/Discover";
import "../assects/style/home/home.css";
export default class Home extends React.Component{
    render(){
        return(
            <div className={"home"}>
                    <nav className={"homeNav"}>
                        <Icon type="menu" />
                        <NavLink to={"/my"}>我的</NavLink>
                        <NavLink to={"/discover"}>发现</NavLink>
                        <NavLink to={"/couldCountry"}>云村</NavLink>
                        <NavLink to={"/video"}>视频</NavLink>
                        <Icon type="search" />
                    </nav>
                    <Switch>
                        <Route path={"/my"} component={Discover}></Route>
                        <Route path={"/discover"} component={Discover}></Route>
                        <Route path={"/couldCountry"} component={Discover}></Route>
                        <Route path={"/video"} component={Discover}></Route>
                    </Switch>
            </div>
        )
    }
}