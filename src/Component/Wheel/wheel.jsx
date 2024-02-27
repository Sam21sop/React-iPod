import { Component } from "react";
import wheelStyle from './wheel.module.css';
import { FaFastForward, FaFastBackward  } from "react-icons/fa";
import { HiMiniPlayPause } from "react-icons/hi2";


export default class Wheel extends Component{

    // class constructor
    constructor(){
        super();
    };

    // control the action of rotation
    wheelRotationHandle = (event) => {

    };


    // Bind component with zingtouch
    componentDidMount(){
        
    };

    // Render method to display UI
    render(){
        return (
            <>
                <div className={wheelStyle.wheelContainer}>
                    <div className={wheelStyle.outerWheel}>
                        <div className={wheelStyle.menu}>
                            MENU
                        </div>
                        <div >
                            <FaFastBackward className={wheelStyle.reverse}/>
                        </div>
                        <div className={wheelStyle.forward}>
                            <FaFastForward />
                        </div>
                        <div className={wheelStyle.playPause}>
                            <HiMiniPlayPause />
                        </div>
                        <div className={wheelStyle.innerWheel}>

                        </div>
                    </div>
                </div>
            </>
        )
    }
};