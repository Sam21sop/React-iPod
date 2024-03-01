import { Component } from "react";
import wheelStyle from './wheel.module.css';
import { FaFastForward, FaFastBackward  } from "react-icons/fa";
import { HiMiniPlayPause } from "react-icons/hi2";
import ZingTouch from 'zingtouch';


export default class Wheel extends Component{

    // class constructor
    constructor(){
        super();
        this.angle = 0;
    };

    // control the action of rotation
    wheelControll = (e) => {
        const { updateActiveMenu, currentMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        } 
        else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }
        }
    }


    // Bind component with zingtouch
    componentDidMount(){
        const {changeMenuBackward} = this.props;
        const wheelControll = this.wheelControll;
        
        const wheel = document.getElementById('wheel')
        const activeRegion = ZingTouch.Region(wheel);

        const menuIcon = document.getElementById('menu');
        const forward = document.getElementById('forward');
        const backward = document.getElementById('backward');

        // long press/tap gesture on wheel
        const longPressGesture = new ZingTouch.Tap({
            maxDelay: 10000,
            numInput: 1,
            tolarance: 1
        });

        activeRegion.bind(menuIcon, 'tap', function (e) {
            changeMenuBackward();
        });
        activeRegion.bind(wheel, 'rotate', function (e) {
            wheelControll(e);
        });

        // activeRegion.bind(backward, longPressGesture, function (e) {
        //     seekSongReverse(e);
        // });

        // activeRegion.bind(forward, longPressGesture, function (e) {
        //     seekSongForward(e);
        // });
    };


    // Render method to display UI
    render(){
        const {changeMenuForward, active, currentMenu} = this.props;
        return (
            <>
                <div className={wheelStyle.wheelContainer}>
                    <div className={wheelStyle.outerWheel} id="wheel">

                        {/* option given to the wheel  */}
                        <div className={wheelStyle.menu} id="menu">
                            MENU
                        </div>
                        <div className={wheelStyle.reverse} id="backward">
                            <FaFastBackward/>
                        </div>
                        <div className={wheelStyle.forward} id="forward">
                            <FaFastForward />
                        </div>
                        <div className={wheelStyle.playPause} id="playPause">
                            <HiMiniPlayPause />
                        </div>

                        {/* inner wheel treated as enter */}
                        <div 
                            className={wheelStyle.innerWheel} 
                            id="blank"
                            onClick={() => (changeMenuForward(active, currentMenu))}
                        >
                        </div>
                    </div>
                </div>
            </>
        )
    }
};