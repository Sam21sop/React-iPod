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
            songChildList : ["All Songs", "Artist", "Albums"],
            lengthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3, 10: 2 }, 
            menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, 
            currentMenu: -1,
            navigationStack: [],
        }
    }


    // Function will update active menu while rotating on the track wheel
    updateActiveMenu = (direction, menu) => {
      if (
      menu !== -1 &&
      menu !== 1 &&
      menu !== 4 &&
      menu !== 8 &&
      menu !== 3 &&
      menu !== 9 &&
      menu !== 10
      ) {
          return;
      }
      let min = 0;
      let max = 0;

      max = this.state.lengthMenuKey[menu];

      if (direction === 1) {
          if (this.state.active >= max) {
              this.setState({ active: min });
          } else {
              this.setState({ active: this.state.active + 1 });
          }
      } else {
          if (this.state.active <= min) {
              this.setState({ active: max });
          } else {
              this.setState({ active: this.state.active - 1 });
          }
      }
    };


    // Function for undo one step back
    undoMenuByStep = () => {
        const navigationStack = this.state.navigationStack.slice();
        if (this.state.currentMenu === -2) {
          return;
        } else {
          const prevId = navigationStack.pop();
          console.log("prevId" + prevId);
          this.setState({
            currentMenu: prevId,
            navigationStack: navigationStack,
            active: 0,
          });
          return;
        }
    };
    

    // Function for open selected option
    openSelectedMenu = (id, fromMenu) => {
        const navigationStack = this.state.navigationStack.slice();
    
        if (
          fromMenu !== -2 &&
          fromMenu !== -1 &&
          fromMenu !== 1 &&
          fromMenu !== 4 &&
          fromMenu !== 3 &&
          fromMenu !== 8 &&
          fromMenu !== 9 &&
          fromMenu !== 0 &&
          fromMenu !== 7 &&
          fromMenu !== 10
        ) {
          return;
        }
    
        if (fromMenu === -2) {
          navigationStack.push(this.state.currentMenu);
          this.setState({
            currentMenu: -1,
            navigationStack: navigationStack,
            active: 0,
          });
          return;
        }
    
        if (fromMenu === -1) {
          navigationStack.push(this.state.currentMenu);
          this.setState({
            currentMenu: id,
            navigationStack: navigationStack,
            active: 0,
          });
          return;
        }
    
        if (fromMenu === 7 || fromMenu === 0) {
          this.togglePlayPause();
          return;
        }
    
        if (fromMenu === 8) {
          this.setTheme(id);
          return;
        }
    
        if (fromMenu === 9) {
          this.setWheelColor(id);
          return;
        }
    
        if (fromMenu === 10) {
          this.setWallpaper(id);
          return;
        }
    
        navigationStack.push(this.state.currentMenu);
    
        if (fromMenu === 4) {
          this.chagePlayingSongFromMusicMenu(id, navigationStack, fromMenu);
          return;
        }
    
        const currentMenuID = this.state.menuMapping[fromMenu][id];
        this.setState({
          currentMenu: currentMenuID,
          navigationStack: navigationStack,
          active: 0,
        });
    };
    

    // wrapper for all component
    render(){
        // destructuring properties/props from state
        let {active, menuList, songChildList, currentMenu} = this.state;
        
        return (
            <>
                <div className={caseStyle.caseContainer}>
                    {/* display component and thier props and states */}
                    <Display 
                        menuList={menuList} 
                        songChildList={songChildList}
                        active = {active}
                        currentMenu = {currentMenu}
                        updateActiveMenu={this.updateActiveMenu}
                        changeMenuForward = {this.openSelectedMenu}
                        changeMenuBackward = {this.undoMenuByStep}
                    />

                    {/* wheel component and there props and state  */}
                    <Wheel 
                        active = {active}
                        menuList={menuList} 
                        songChildList={songChildList}
                        updateActiveMenu={this.updateActiveMenu}
                        changeMenuForward = {this.openSelectedMenu}
                        changeMenuBackward = {this.undoMenuByStep}
                    />
                </div>
            </>
        )
    }
}