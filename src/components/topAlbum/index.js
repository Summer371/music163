import React from "react";

export default class TopAlbum extends React.Component {
    render() {
        const {topAlbum}=this.props.location.stage;
        return (
            <ul>
                {
                    topAlbum.map((v, i) => {
                        return (
                            <li key={i}>
                                <img src={v.picUrl} alt=""/>
                                <p>{v.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}