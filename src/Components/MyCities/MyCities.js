import React, {Component} from 'react';


export class MyCities extends Component {
    render() {
        const { weatherList , theme } = this.props;
        if (!weatherList) // check for empty array of selected locations
            return <div className={'lead text-center'}>Here you will see your favorite location</div>;

        return (
            weatherList.map(location => {
                const {main: {pressure, humidity , temp}, wind: {speed}} = location;
                const { name , sys: { country }} = location;
                const {icon} = location.weather[0];
                return (
                    <div className={"d-flex p-0 flex-column align-items-between"}>
                        <div className={`col-12 my-2 p-0 b-radius-25  ${theme ? 'border-grey' : 'background-dark-blue-details text-white'} shadow-lg`}>
                            <div className={"d-flex flex-row"}>
                                <div className={`b-radius-25 ${theme ? `background-light-blue` : `background-dark-blue-max-min`}`}>
                                    {/*<i className="fas fa-cloud color-purple "/>*/}
                                    <img className={"b-radius-25"} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                         alt=""/>
                                </div>
                                <div className={'px-3 d-flex flex-row justify-content-center align-items-center'}>
                                    <div className={"h3 px-2"}>{Math.round(temp)}°C</div>
                                    <div className={"d-flex flex-column px-2 border-left-grey"}>
                                        <div className={'font-weight-bold '}>{name}</div>
                                        <div>{country}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"d-flex flex-row justify-content-center py-2 font-weight-light"}>
                                <div className={"px-3"}>Humidity: {humidity}</div>
                                <div className={"border-left-grey px-3"}>Pressure: {pressure}</div>
                                <div className={"border-left-grey px-3"}>{speed} km/h</div>
                            </div>
                        </div>
                    </div>
                );
            })
        )
    }
}
