import { Component } from "react";
import caseStyle from './case.module.css';
import Display from "../Display/Display";
import Wheel from "../Wheel/wheel";


// parent node from here will pass all state and props to child 
export default class Case extends Component{

    constructor(){
        super();
        this.state = {
            active: 0,
            menuList: ["Cover Flow", "Music", "Game", "Setting"],
            musicChild : ["All Songs", "Artist", "Albums"],
        }
    }

    // wrapper for all component
    render(){
        let {active, menuList, musicChild} = this.state;
        // console.log(menuList);
        return (
            <>
                <div className={caseStyle.caseContainer}>
                    <Display 
                        menuList={menuList} 
                        musicChild={musicChild}
                        active = {active}
                    />
                    <Wheel/>
                </div>
            </>
        )
    }
}