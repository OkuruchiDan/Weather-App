import {GET_API , ADD_LOCATION , THEME } from "../action-types";

// export const getQuery = (query) => ({type: GET_QUERY , payload: query});
export const getApi = (inputValue) => { // the fetching main data of weather
    return dispatch => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=66c519d6e92d30a05586310ef45ff00b`)
            .then(res => res.json())
            .then(result => dispatch({type: GET_API , payload: result}));
}
};

export const addLocation = () => ({type: ADD_LOCATION}); // add current location for selected array
export const theme = () => ({type: THEME});
