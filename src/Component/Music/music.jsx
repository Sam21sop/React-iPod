import { Component } from "react";



export default class Music extends Component{
    render(){
        const {songChildList, active} = this.props;
        return (
            <>
                <h3>Music</h3>
                <ul>
                    {songChildList.map((element, index) => (
                        active === index ? 
                            <li key={index} className="active">&nbsp</li> :
                            <li key={index}>&nbsp;{element}</li>
                    ))}
                </ul>
            </>
        )
    }
}