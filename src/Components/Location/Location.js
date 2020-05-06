import React, {Component} from 'react';
import './Location.css';
import LogIn from "../ChangeTheme";
import {DateComponent} from "../Date/Date";
import {Search} from "../Search/index";

export class Location extends Component {
    render() {
        if (!this.props.weather.main) return ( // The check for fetching
            <div className={'location-back col-11 pt-2 pb-5 d-flex b-radius-25 justify-content-around'}>
                <div className={'col-4 pt-5 px-1 pb-2rem d-flex flex-column font-weight-bold h4'}>
                    <DateComponent/>
                </div>
                <div className={'col-4 '}>
                    <Search/>
                    <div className={"d-flex justify-content-center flex-column location-text"}>
                        {/*<i className={"fas fa-map-marker-alt d-block"}/>*/}
                        <div className={'pt-5 text-shadow text-center'}>
                        </div>
                        <div className={'pt-1 text-shadow text-center'}>Please Search some location!</div>
                    </div>
                </div>
                <LogIn/>
            </div>);

        const { name , main: { temp }, sys: { country } } = this.props.weather;

        return (
            <div className={'location-back col-11 pt-2 pb-5 d-flex b-radius-25 justify-content-around'}>
                <div className={'col-4 pt-5 px-1 pb-2rem d-flex flex-column font-weight-bold h4'}>
                    <DateComponent/>
                </div>
                <div className={'col-4 '}>
                    <Search/>
                    <div className={"d-flex justify-content-center flex-column location-text"}>
                        <div className={'pt-5 text-shadow text-center'}>
                            {name} , {country}
                        </div>
                        <div className={'pt-1 text-shadow text-center'}>{Math.round(temp)}°C</div>
                    </div>
                </div>
                <LogIn/>
            </div>
        );
    }
}
