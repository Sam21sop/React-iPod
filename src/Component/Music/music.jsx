import { Component } from "react";
import menuStyle from '../Menu/menu.module.css';

export default class Music extends Component{
    render(){
        const {musicChildList, active, currentMenuIndex, backGroundImage} = this.props;
        return (
            <>
                <div className={menuStyle.menuContainer}>
                    <div className={menuStyle.parentMenuList}>
                        <h3>Music</h3>
                        {musicChildList.map((element, index) => {
                                return (
                                    active === index ? 
                                    <p key={index} className={menuStyle.active}>{element}</p> :
                                    <p key={index}>{element}</p>
                                )
                            })
                        }
                    </div>
                    {currentMenuIndex === 1 && <img className={menuStyle.sideImg} src={backGroundImage} alt="wallpaper" />}

                </div>
            </>
        )
    }
}