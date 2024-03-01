import { Component } from "react"
import SettingStyle from './setting.module.css'


export default class Settings extends Component{
    render(){
        // const {active} = this.props;

        return (
            <>
                <div className={SettingStyle.setting}>
                    <h2>Settings</h2>
                    <img src="" alt="Setting" />
                </div>
            </>
        )
    }
}