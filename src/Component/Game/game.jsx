import { Component } from "react";
import gameStyle from './game.module.css';


export default class Game extends Component{
    render(){
        const {gameImage} = this.props;
        return (
            <>
                <div className={gameStyle.game}>
                    <img  className={gameStyle.img} src={gameImage} alt="game" />
                    <h2 className={gameStyle.heading}>Game</h2>
                </div>
            </>
        )
    }
}
