import { Component } from "react";
import displaystyle from './display.module.css';
import Menu from "../Menu/menu";


export default class Display extends Component{
    

    // render display
    render(){
        let {menuList, active} = this.props;
        return(
            <>
                <div className={displaystyle.display}>
                    <Menu 
                        menuList = {menuList}
                        active = {active}
                    />
                </div>
            </>
        )
    }
}