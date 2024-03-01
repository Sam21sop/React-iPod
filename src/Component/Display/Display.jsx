import { Component } from "react";
import displaystyle from './display.module.css';
import Menu from "../Menu/menu";
import Music from "../Music/music";
import Settings from "../Setting/setting";

export default class Display extends Component{
    

    // render display
    render(){
        let {menuList, active, currentMenu, songChildList} = this.props;
        return(
            <>
                <div className={displaystyle.display}>
                    {currentMenu === -1 && <Menu menuList={menuList} active={active} />}
                    {currentMenu === 1 && <Music songChildList={songChildList} active={active} />}
                    {currentMenu === 2 && <div className="blank-div"><h1 className="empty-text">Games</h1></div>}
                    {currentMenu === 3 && <Settings active={active}/>}
                    {currentMenu === 4 && <Songs songChildList={songChildList} active={active} />}
                </div>
            </>
        )
    }
}