import React from "react";
export default class NewSong extends React.Component{
    render(){
        const {newSong}=this.props.location.stage
        return (
            <ul>
                {
                    newSong.map((v, i) => {
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