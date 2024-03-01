import { Component } from "react";
import displaystyle from './display.module.css';
import Menu from "../Menu/menu";
import Settings from "../Setting/setting";
import Game from "../Game/game";
import Music from "../Music/music";

export default class Display extends Component{
    // render display
    render(){
        let {
            parentMenuList, 
            active, 
            currentMenuIndex, 
            musicChildList, 
            backGroundImage, 
            settingsImage,
            gameImage
        } = this.props;
        return (
            <>
                <div className={displaystyle.display}>
                    {
                        currentMenuIndex === -1 && 
                        <Menu 
                            backGroundImage = {backGroundImage} 
                            parentMenuList={parentMenuList} 
                            active={active} 
                            currentMenuIndex={currentMenuIndex}
                        />
                    }
                    {
                        currentMenuIndex === 0 && 
                        <div className={displaystyle.coverFlow}>
                            <h1>Cover Flow</h1>
                        </div>
                    }
                    {
                        currentMenuIndex === 1 && 
                        <Music 
                            musicChildList={musicChildList} 
                            active={active}
                            currentMenuIndex={currentMenuIndex}
                            backGroundImage = {backGroundImage} 
                        />
                    }
                    {
                        currentMenuIndex === 2 && 
                        <Game 
                            active={active}
                            gameImage={gameImage}
                        />
                    }
                    {
                        currentMenuIndex === 3 && 
                        <Settings 
                            active={active}
                            settingsImage ={settingsImage}
                        />
                    }
                </div>
            </>
        )
    }
}