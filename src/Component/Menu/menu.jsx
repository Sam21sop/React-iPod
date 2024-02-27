import { Component } from "react";
import menuStyle from './menu.module.css';

export default class Menu extends Component{

    // render active menu list
    render(){
        let {menuList, active} = this.props;
        return (
            <>
                <div className={menuStyle.menuContainer}>
                    
                    {/* main menu list */}
                    <div className={menuStyle.parentMenuList}>
                        <h3>iPod</h3>
                        {menuList.map((element, index) => {
                                return (
                                    // active === index ? 
                                    <p key={index} className={menuStyle.active}>&nbsp;{element}</p> //:
                                    // <p key={index}>&nbsp;{element}</p>
                                )
                            })
                        }
                    </div>
                    {/* child menu list of parent menu list those who have child */}
                    <div className={menuStyle.sideImg}>
                        <img src="../../../public/nature.jpg" alt="wallpaper" />
                    </div>
                </div>
            </>
        )
    }
}