import React from "react";
import {connect} from "react-redux";
import "../../../assects/style/discover/songSheet.css";
import {
    Icon, Carousel
} from "antd";
import {
    bindActionCreators
} from "redux";
import recommendPlayList from "../../../store/actionCreator/discover/songSheet_recommend";

class RecommendPlayList extends React.Component {
    render() {
        const {playlists} = this.props;
        const swiperList = [];
        if (playlists.length > 0) {
            for (let i = 0; i < 3; i++) {
                swiperList.push(<div key={i}><span><Icon type="caret-right"/>{this.$filter.playCount(playlists[i].playCount)}</span><img
                    src={playlists[i].coverImgUrl} alt=""></img><p>{playlists[i].name}</p></div>)
            }
        }
        return (
            <div className={"recommendPlayList"}>
                <div className={"songSheetSwiper"}>
                    <Carousel autoplay>
                        {swiperList}
                    </Carousel>
                </div>
                <div className={"songSheetList"}>
                    <ul>
                        {
                            playlists.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <span><Icon type="caret-right"/>{v.playCount}</span>
                                        <img src={v.coverImgUrl} alt=""/>
                                        <p>{v.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getplayList();
        this.props.getTopPlayLists()
    }
}

function mapStateToProps(state) {
    return {
        carList: state.playList.carList,
        playlists: state.top.playlists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(recommendPlayList, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendPlayList)
