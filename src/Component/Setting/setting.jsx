import { Component } from "react"
import SettingStyle from './setting.module.css'


export default class Settings extends Component{
    render(){
        const {settingsImage} = this.props;
        return (
            <>
                <div className={SettingStyle.setting}>
                    <img 
                        className={SettingStyle.img} 
                        src={settingsImage} 
                        alt="Setting" 
                    />
                    <h2 className={SettingStyle.heading}>Settings</h2>
                </div>
            </>
        )
    }
}