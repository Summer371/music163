import React from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {Icon} from "antd";
import highquality from "../../../store/actionCreator/discover/highquality";
import "../../../assects/style/discover/songSheet.css";
class Highquality extends React.Component {
    render() {
        const {highquality} = this.props;
        return (
            <div className={"songSheetList"}>
                <ul>
                    {
                        highquality.map((v, i) => {
                            return (
                                <li key={i}>
                                    <span><Icon type="caret-right" />{this.$filter.playCount(v.playCount)}</span>
                                    <img src={v.coverImgUrl} alt=""/>
                                    <p>{v.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getHeighqualityLists();

    }
}

function mapStateToProps(state) {
    return {
        highquality: state.top.highquality
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(highquality, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Highquality)