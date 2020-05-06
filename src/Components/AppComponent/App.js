import React, {Component} from 'react';
import './App.css';
import {Location} from "../Location";
import {ThreeDays} from "../TodayDetails/index";
import {AddLocation} from "../AddLocation/index";

export class App extends Component {
    render() {
        const { theme } = this.props; // toggle for darkMode
        const CN = 'main-class';
        return (
            <div className={`${CN} ${ theme ? `` : `background-dark-blue`} py-5 shadow-lg  border-dark`}>
                {/*Component with Date , Search , DarkMode*/}
                <Location />
                <div className={'col-11 d-flex justify-content-between position-relative p-0'}>
                    {/*Today Details Component*/}
                    <ThreeDays />
                    {/*Selected Location Component*/}
                    <AddLocation />
                </div>
            </div>
        );
    }
}
