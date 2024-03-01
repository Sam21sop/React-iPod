import { Component } from "react";
import menuStyle from './menu.module.css';

export default class Menu extends Component{

    // render active menu list
    render(){
        let {parentMenuList, active, currentMenuIndex, backGroundImage} = this.props;
        return (
            <>
                <div className={menuStyle.menuContainer}>
                    {/* main menu list */}
                    <div className={menuStyle.parentMenuList}>
                        <h3 className={menuStyle.headingThree}>iPod</h3>
                        {parentMenuList.map((element, index) => {
                                return (
                                    active === index ? 
                                    <p key={index} className={menuStyle.active}>{element}</p> :
                                    <p key={index}>{element}</p>
                                )
                            })
                        }
                    </div>
                    {/* Side wallpaper for default screen */}
                    {currentMenuIndex === -1 && <img className={menuStyle.sideImg} src={backGroundImage} alt="wallpaper" />}
                </div>
            </>
        )
    }
};
