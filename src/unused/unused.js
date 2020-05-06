import {GET_API} from "../action-types";

const api = {
    key: "66c519d6e92d30a05586310ef45ff00b",
    base: "https://api.openweathermap.org/data/2.5/weather?q="
};

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=66c519d6e92d30a05586310ef45ff00b`)
    .then(res => res.json())
    .then(result => dispatch({type: GET_API , payload: result}));