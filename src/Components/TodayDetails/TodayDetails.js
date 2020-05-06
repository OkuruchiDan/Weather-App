import React, {Component} from 'react';
import './TodayDetails.css'

export class TodayDetails extends Component {
    render() {
        const {theme} = this.props;
        if (!this.props.weather.weather) // check for fetching
            return (
                <div className={`h5 py-4 px-4 ${theme ? `` : `text-white`}`}>
                    Today <span className={"lead"}>Details:</span>
                </div>
            );

        const {main: {pressure, humidity, temp_min, temp_max}, wind: {speed}} = this.props.weather;
        const {icon, main} = this.props.weather.weather[0];
        return (
            <div className={"col-4 p-0 font-size-125 "}>
                <div className={`h5 py-4 px-4 ${theme ? `` : `text-white`}`}>Today <span
                    className={"lead"}>Details:</span></div>
                <div
                    className={`px-0 d-flex justify-content-between b-radius-25 shadow ${theme ? 'background-light-blue border-grey' : 'background-dark-blue-details text-white'}`}>
                    <div className={"d-flex flex-row justify-content-center-center align-items-center "}>
                        <div className={'d-flex flex-column justify-content-center align-items-center'}>
                            <img className={"b-radius-25"} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                 alt=""/>
                            {/*<div>{main}</div>*/}
                        </div>
                    </div>
                    <div className={'col-4 d-flex justify-content-center align-items-center lead'}>
                        {main}
                    </div>
                    <div
                        className={`col-4 d-flex flex-column justify-content-center align-items-center p-0 b-radius-25 ${theme ? `bg-light` : `background-dark-blue-max-min text-white`} `}>
                        <div><span className={'lead'}>Max:</span> {Math.round(temp_max)}°C</div>
                        <div><span className={'lead'}>Min:</span> {Math.round(temp_min)}°C</div>
                    </div>
                </div>
                <div
                    className={`col-12 d-flex flex-column justify-content-center mt-3 py-2 px-4 b-radius-25 shadow ${theme ? `border-grey background-light-blue` : `background-dark-blue-max-min text-white`}`}>
                    <div className={'d-flex justify-content-between'}><span
                        className={'lead'}>Pressure:</span> {pressure}</div>
                    <div className={'d-flex justify-content-between'}><span
                        className={'lead'}>Humidity:</span> {humidity}</div>
                    <div className={'d-flex justify-content-between'}><span
                        className={'lead'}>Wind speed:</span> {speed}</div>
                </div>

            </div>
        );
    }
}
