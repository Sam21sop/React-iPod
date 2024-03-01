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
          parentMenuList: ["Cover Flow", "Music", "Game", "Setting"],
          musicChildList : ["All Songs", "Artist", "Albums"],
          lengthMenuKey: { 
            "-1": 3, 
            1: 2, 
            3: 2, 
          }, 
          menuMapping: { 
            "-1": [0, 1, 2, 3], 
            1: [4, 5, 6], 
            3: [8, 9, 10] 
          }, 
          currentMenuIndex: -1,
          navigationStack: [],
          backGroundImage : './nature.jpg',
          settingsImage: './setting.png',
          gameImage: './game.jpg'
      }
  }


  // Function will update active menu while rotating on the track wheel
  updateActiveMenu = (direction, menu) => {
    if ( menu !== -1 && menu !== 1 && menu !== 3) {
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
  undoMenuByOneStep = () => {
    if (this.state.navigationStack.length <= 0) {
      return;
    }
    const navigationStack = this.state.navigationStack.slice();
    const prevId = navigationStack.pop();
    this.setState({
      currentMenuIndex: prevId,
      navigationStack: navigationStack,
      active: 0,
    });
  };
  

  // Function for open selected option
  openSelectedMenu = (id, fromMenu) => {
    const navigationStack = this.state.navigationStack.slice();
    if (fromMenu !== -1 && fromMenu !== 3 && fromMenu !== 0 ) {
      return;
    }

    if (fromMenu === -2) {
      navigationStack.push(this.state.currentMenuIndex);
      this.setState({
        currentMenuIndex: -1,
        navigationStack: navigationStack,
        active: 0,
      });
      return;
    }

    if (fromMenu === -1) {
      navigationStack.push(this.state.currentMenuIndex);
      this.setState({
        currentMenuIndex: id,
        navigationStack: navigationStack,
        active: 0,
      });
      return;
    }

    navigationStack.push(this.state.currentMenuIndex);
    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({
      currentMenuIndex: currentMenuID,
      navigationStack: navigationStack,
      active: 0,
    });
  };
  

  // wrapper for all component
  render(){
      // destructuring properties/props from state
      let {
        active, parentMenuList, 
        musicChildList, currentMenuIndex, 
        backGroundImage, settingsImage,
        gameImage
      } = this.state;
      return (
          <>
              <div className={caseStyle.caseContainer}>
                  {/* display component and thier props and states */}
                  <Display 
                      parentMenuList={parentMenuList} 
                      musicChildList={musicChildList}
                      active = {active}
                      currentMenuIndex = {currentMenuIndex}
                      backGroundImage = {backGroundImage}
                      updateActiveMenu={this.updateActiveMenu}
                      changeMenuForward = {this.openSelectedMenu}
                      changeMenuBackward = {this.undoMenuByOneStep}
                      settingsImage ={settingsImage}
                      gameImage = {gameImage}
                  />

                  {/* wheel component and there props and state  */}
                  <Wheel 
                      active = {active}
                      currentMenuIndex = {currentMenuIndex}
                      musicChildList={musicChildList}
                      updateActiveMenu={this.updateActiveMenu}
                      changeMenuForward = {this.openSelectedMenu}
                      changeMenuBackward = {this.undoMenuByOneStep}
                  />
              </div>
          </>
      )
  };
}