import React, {Component} from 'react';
import './MyCities.css';
import {MyCities} from "../MyCities/index";

export class AddLocation extends Component {
    state = {
        localStorageArray: [],// it's will use when componentDidMount for render LOCATIONS from local Storage
    };

    componentDidMount() {
        console.log('didmount');
        this.setState({localStorageArray: JSON.parse(localStorage.getItem('locationsList'))})
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('update');
        // console.log(this.state.localStorageArray.indexOf(el => el.name !== nextProps.weather.name));
        // if (this.props.weather !== nextProps.weather) {
        //     console.log('is ganged');
        //     this.setState({localStorageArray: [...this.state.localStorageArray, nextProps.weather]});
        // }
    }

    render() {
        const {localStorageArray} = this.state;
        const {weather, theme} = this.props;
        const setItemToLocalStorage = () => {
            if (!localStorageArray) {
                console.log('!localStorageArray');
                this.setState({localStorageArray: [weather]});
            } else {
                console.log(localStorageArray.indexOf(weather));
                if (localStorageArray.indexOf(weather) === -1) { //if Local Storage will not have this location , it will be pushed by click
                    this.setState({localStorageArray: [...this.state.localStorageArray, weather]});
                }
            }
            const itemToPush = JSON.stringify(this.state.localStorageArray);
            localStorage.setItem(`locationsList`, itemToPush);
        };

        return (
            <div className={"col-4 p-0"}>
                {/*Selected Locations */}
                <MyCities weatherList={localStorageArray}/>
                <div
                    className={"col-12 d-flex justify-content-center align-items-center my-2 p-0 b-radius-25 border-grey shadow-lg p-2"}>
                    <div
                        className={`col-10 p-2 text-center ${theme ? `background-light-blue` : `background-dark-blue-max-min text-white`} b-radius-25 cursor-pointer lead`}
                        onClick={setItemToLocalStorage}
                    >
                        Add current Locations
                    </div>
                </div>
            </div>
        );
    }
}
